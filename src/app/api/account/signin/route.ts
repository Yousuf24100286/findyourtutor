import { NextRequest, NextResponse } from 'next/server';
import { AccountAPISchema } from '@/app/api/schema';
import { MethodNotAllowedError, NotFoundError } from '@/app/api/errorHandler';
import { RouteResponse, UserResponse } from '@/app/api/response';
import { schema, sql } from '@/db';
import { eq } from 'drizzle-orm';

export const POST = async (req: NextRequest): RouteResponse<UserResponse> => {
	try {
		const data = AccountAPISchema.signin.post.payload.parse(await req.json());
		const account = await sql.query.account.findFirst({ where: eq(schema.account.email, data.email) });
		if (!account) throw NotFoundError('Account not found.');
		const session = (await sql.insert(schema.session).values({
			account_id: account.id,
		}).returning().onConflictDoNothing())[0];
		return NextResponse.json({ 
			success: true,
			message: 'Sign in successful.',
			account: {
				...account,
				password: undefined,
			},
		}, {
			status: 200,
			headers: {
				'Set-Cookie': `session_id=${session.id}; Path=/; HttpOnly; SameSite=Strict; Max-Age=31536000;`,
			},
		})
	} catch (error) {
		console.log(error)
		return NextResponse.json({ 
			success: false,
			message: 'An error occurred.',	
			error: error 
		}, {
			status: 400,
		});
	}
}

export const GET = MethodNotAllowedError;
export const PUT = MethodNotAllowedError;
export const DELETE = MethodNotAllowedError;