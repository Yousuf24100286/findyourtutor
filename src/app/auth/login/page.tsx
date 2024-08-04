import { LoginForm } from "@/components/auth/login-form";
import { AuthHeader } from "@/components/Header";
import { H1, Muted, P } from "@/components/Typography";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="lg:block hidden bg-success h-full w-[50%] absolute top-0 left-0 -z-10" >
        <Image src='/auth/books-stationary-globe.svg'
          alt='books, stationary and globe'
          width={720}
          height={602}
          className="absolute bottom-0 right-0 w-full"
        />
      </div>
      <div className='min-h-screen flex flex-col items-center lg:items-end justify-between py-4'>
        <AuthHeader />
        <div className='flex flex-row justify-center lg:w-[50%]'>
          <div className="flex flex-col items-center bg-white min-w-96 rounded-lg gap-6 py-6 px-10">
            <H1>Log In</H1>
            <LoginForm />
            <Muted className="w-full">Done have an account? <Link href='/auth/register'>Sign Up</Link></Muted>
          </div >
        </div >
        <Muted className='text-center lg:w-[50%]'>If you are having trouble loggin in, email us at <Link href='mailto:contact@findyourtutor.co.uk'>contact@findyourtutor.co.uk</Link> or <Link href='/contact-us'>contact us</Link>.</Muted>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;