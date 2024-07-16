import { z } from 'zod';

export const AccountAPISchema = {
	signup: {
		post: {
			payload: z.object({
				email: z.string().email(),
				password: z.string().min(8),
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