import React from 'react';
import { H2, P } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ResetPasswordForm = async () => (
	<form className='w-full flex flex-col gap-6' action={async (formData: FormData) => {
		'use server'
		const email = formData.get('email') as string;
		console.log(email);
	}}>
		<div className="flex flex-col gap-2">
			<Label htmlFor="password">New Password</Label>
			<Input type="password" name="password" id="password" required/>
		</div>
		<div>
			<Label htmlFor="password">Confirm Password</Label>
			<Input type="password" name="confirm-password" id="confirm-password" required/>
		</div>
		<Button type='submit' className='w-full'>Reset Password</Button>
	</form>
)


export default async ({ searchParams }: Readonly<{ searchParams: unknown }>) => {
	console.log(searchParams);

	// To Do: 
	// extract token from searchParams
	// verify token
	// if token is valid, render ResetPasswordForm
	// else redirect to /auth/forgot-password

	return (
		<div className='flex flex-1 flex-row flex-wrap justify-evenly items-center gap-20'>
			<div className='flex flex-row justify-center'>
				<div className="flex flex-col items-center bg-white min-w-96 rounded-lg gap-4 pt-6 pb-9 px-10">
					<H2 className='flex items-center'>Reset Password</H2>
					<P>Enter your new password and confirm it to reset your password.</P>
					<ResetPasswordForm />
				</div>
			</div>	
		</div>
	)
}