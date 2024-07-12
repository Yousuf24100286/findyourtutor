import { NextResponse } from 'next/server';
import { ErrorResponse } from './response';
import { ZodError } from 'zod';

export const RouteError = (status: number, message: string, error?: unknown): ErrorResponse => NextResponse.json({ success: false, message, error }, { status });
export const NotImplementedError = (): ErrorResponse => RouteError(501, 'Not Implemented.');
export const MethodNotAllowedError = (): ErrorResponse => RouteError(405, 'Method Not Allowed.');
export const InternalServerError: (error: unknown) => ErrorResponse = (error: unknown) => RouteError(500, 'An error occurred.', error);
export const BadRequestError: (message: string) => ErrorResponse = (message: string) => RouteError(400, message);
export const NotFoundError: (message: string) => ErrorResponse = (message: string) => RouteError(404, message);

export const ErrorHandler = (error: unknown): ErrorResponse => {
	if (error instanceof NextResponse) {
		return error;
	} else if (error instanceof ZodError) {
		return BadRequestError(error.errors[0].message);
	} else {
		return InternalServerError(error);
	}
}
