import { NextRequest } from "next/server";
import { AccountAPISchema } from "@/app/api/schema"
import { RouteResponse, UserResponse } from "@/app/api/response";
import { POST as SignInPost } from "@/app/api/account/signin/route";
import { schema, sql } from "@/db";
import { MethodNotAllowedError, ErrorHandler } from "@/app/api/errorHandler";

export const POST = async (req: NextRequest): RouteResponse<UserResponse> => {
	try {
		const clone_req = new NextRequest(req.clone());
		const data = AccountAPISchema.signup.post.payload.parse(await req.json());
		await sql.insert(schema.account).values({
			email: data.email,
			password: data.password,
			role: data.role,
			group: data.group,
			is_verified: false,
			created_at: new Date(),
			updated_at: new Date(),
		}).execute();
		return await SignInPost(clone_req);
	} catch (error) {
		return ErrorHandler(error);
	}
}

export const GET = MethodNotAllowedError;
export const PUT = MethodNotAllowedError;
export const DELETE = MethodNotAllowedError;