import { z } from 'zod';

export const UserRoleGroupCombinationSchema = z.union([
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
		group: z.any().transform(() => 'admin'),
	})
])
export type TUserRoleGroupCombination = z.infer<typeof UserRoleGroupCombinationSchema>
