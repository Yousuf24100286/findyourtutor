"use server"
import { TSignInForm, TSignUpForm } from '@/schema/auth'

export const SignInAction = (data: TSignInForm) => {
	console.log(data);
}

export const SignUpAction = (data: TSignUpForm) => {
	console.log(data);
}