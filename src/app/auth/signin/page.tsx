import React from "react";
import SignInForm from "./SignInForm";
import { H1 } from "@/components/Typography";

const SignInPage = () => {

	return (
		<div className='flex flex-row justify-center'>
			<div className="flex flex-col items-center bg-white min-w-96 rounded-lg gap-4 pt-6 pb-9 px-10">
				<H1>Log In</H1>
				<SignInForm />
			</div>
		</div>
	);
}

export default SignInPage;