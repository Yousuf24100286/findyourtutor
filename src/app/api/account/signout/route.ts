import { NextRequest, NextResponse } from "next/server";
import { RouteResponse } from "@/app/api/response";
import { BadRequestError, ErrorHandler, MethodNotAllowedError } from "@/app/api/errorHandler";

export const POST = async (req: NextRequest): RouteResponse => {
	try {
		const session_id = req.cookies.get('session_id');
		if (!session_id) 
			throw BadRequestError('No user session found.');
		return NextResponse.json({ success: true, message: 'Sign out successful.' }, {
			status: 200,
			headers: {
				'Set-Cookie': `session_id=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0;`,
			},
		});
	} catch (error) {
		return ErrorHandler(error);
	}
}

export const GET = MethodNotAllowedError;
export const PUT = MethodNotAllowedError;
export const DELETE = MethodNotAllowedError;