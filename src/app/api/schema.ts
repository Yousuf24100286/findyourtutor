import { z } from 'zod';

export const AccountAPISchema = {
	signup: {
		post: {
			payload: z.object({
				email: z.string().email(),
				password: z.string().min(8),
				role: z.string().min(1),
				group: z.string().min(1),
			}),
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