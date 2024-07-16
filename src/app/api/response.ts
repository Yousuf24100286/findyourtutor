import { NextResponse } from "next/server";
import { schema } from "@/db";

export type BaseResponse<Body = {}> = NextResponse<{
	success: boolean,
	message: string,
} & Body>;

export type ErrorResponse = BaseResponse<{ error?: unknown }>;
export type RouteResponse<SuccessResponse extends BaseResponse = BaseResponse> = Promise<SuccessResponse | ErrorResponse>;

export type UserResponse = BaseResponse<{ 
	account: Omit<(typeof schema.account.$inferSelect), 'password'>, 
}>;
export type CodeResponse = BaseResponse<{
	code: string,
}>;