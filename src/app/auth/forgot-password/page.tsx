import React from 'react';
import { H2, P } from '@/components/Typography';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const ForgotPasswordForm = async () => (
	<form method='POST' className='w-full flex flex-col gap-6' action={async (formData: FormData) => {
		'use server'
		const email = formData.get('email') as string;
		console.log(email);
	}}>
		<div className="flex flex-col gap-2">
			<Label htmlFor="email" className='hidden'>Email</Label>
			<Input type="email" name="email" id="email" required/>
		</div>
		<Button type='submit' className='w-full'>Send Reset Link</Button>
	</form>
)


export default async () => (
	<div className='flex flex-1 flex-row flex-wrap justify-evenly items-center gap-20'>
		<div className='flex flex-row justify-center'>
			<div className="flex flex-col items-center bg-white min-w-96 rounded-lg gap-4 pt-6 pb-9 px-10">
				<H2 className='flex items-center'>Forgot Password</H2>
				<P>Enter your email address and we will send you a link to reset your password.</P>
				<ForgotPasswordForm />
			</div>
		</div>	
	</div>
)