import { z } from 'zod';
export const SignUpFormSchema = z.object({
	name: z.string(),
	email: z.string(),
	password: z.string(),
	role: z.string(),
	group: z.string(),
	termsAndConditions: z.number(),
}); 

export type TSignUpForm = z.infer<typeof SignUpFormSchema>;

export const StudentSignUpFormSchema = SignUpFormSchema.extend({});
export const TutorSignUpFormSchema = SignUpFormSchema.extend({
	university: z.string(),
});


export type TStudentSignUpForm = z.infer<typeof StudentSignUpFormSchema>;
export type TTutorSignUpForm = z.infer<typeof TutorSignUpFormSchema>;

export const SignInFormSchema = z.object({
	email: z.string(),
	password: z.string(),
	rememberMe: z.number(),
}); 

export type TSignInForm = z.infer<typeof SignInFormSchema>;