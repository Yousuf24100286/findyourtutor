import { z } from 'zod';

export const PasswordInputSchema = z
	.string({ message: 'Password must be a string' })
	.min(8, { message: 'Password must be at least 8 characters long' })
	.regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
	.regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
	.regex(/[0-9]/, { message: 'Password must contain at least one digit' }) 
	.regex(/[~!@#$%^&*()-_+={}[\]|\\;:"<>,.\/\?]/, { message: 'Password must contain at least one special character' }); 
;

export const AccountAPISchema = {
	signup: {
		post: {
			payload: z.object({
				email: z.string().email(),
				password: PasswordInputSchema,
			}).and(z.union([
				z.object({
					role: z.literal('tutor'),
					group: z.union([z.literal('enrolled'), z.literal('graduate')]).default('enrolled'),
				}),
				z.object({
					role: z.literal('student'),
					group: z.union([z.literal('student'), z.literal('parent')]).default('student'),
				}),
				z.object({
					role: z.literal('admin'),
					group: z.literal('admin').default('admin'),
				})
			]))
		}
	},
	signin: {
		post: {
			payload: z.object({
				email: z.string().email(),
				password: z.string().min(8),
			})
		}
	}
};