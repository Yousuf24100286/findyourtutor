"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import Link from "next/link";
import SignInForm from "./SignInForm";

const SignInPage = () => {

	return (
		<div className='flex flex-row justify-center'>
			<div className="flex flex-col items-center bg-white min-w-96 rounded-lg gap-4 pt-6 pb-9 px-10">
				<h1>Log In</h1>
				<SignInForm />
			</div>
		</div>
	);
}

export default SignInPage;