import React from 'react';
import { redirect } from "next/navigation";
import { Button } from '@/components/ui/button';
import { H2, P, Subtle, Disabled } from '@/components/Typography';
import { TUserRoleGroupCombination, UserRoleGroupCombinationSchema } from '@/schemas';
import { StudentRegisterForm } from "@/components/auth/student-register-form";
import { TutorRegisterForm } from '@/components/auth/tutor-register-form';
import Image from 'next/image';
import { AuthHeader } from '@/components/Header';
import Link from 'next/link';

const RoleSelectionCards = async () => {
  const RoleSelectionForm = ({ role, group }: Readonly<TUserRoleGroupCombination>) => (
    <form className='w-full'>
      <input type="hidden" name="role" value={role} />
      <input type="hidden" name="group" value={group} />
      <Button type="submit" className='w-full'>Sign Up</Button>
    </form>
  )

  return (
    <div className='flex flex-1 flex-row flex-wrap justify-evenly items-center gap-20'>
      <div className='flex flex-col gap-4 bg-white rounded-lg p-6 text-wrap max-w-80 items-center'>
        <Image width={121} height={97} src='/parent-svg.svg' alt='parent-role-selection-svg' />
        <H2 className='text-secondary'>Parent</H2>
        <P className='text-center text-text-secondary'>Sign up as a parent to provide your children with the top-tier tutoring they deserve.</P>
        <RoleSelectionForm {...{ role: 'STUDENT', group: 'PARENT' }} />
      </div>
      <div className='flex flex-col gap-4 bg-white rounded-lg p-6 text-wrap max-w-80 items-center'>
        <Image width={121} height={97} src='/student-svg.svg' alt='student-role-selection-svg' />
        <H2 className='text-secondary'>Student</H2>
        <P className='text-center text-text-secondary'>Sign up as a student to chat with tutors, book lessons, and meet your tutor.</P>
        <RoleSelectionForm {...{ role: 'STUDENT', group: 'SELF' }} />
      </div>
      <div className='flex flex-col gap-4 bg-white rounded-lg p-6 text-wrap max-w-80 items-center'>
        <Image width={121} height={97} src='/tutor-svg.svg' alt='tutor-role-selection-svg' />
        <H2 className='text-secondary'>Tutor</H2>
        <P className='text-center text-text-secondary'>Sign up as a tutor to view booking requests and inspire new students.</P>
        <RoleSelectionForm {...{ role: 'TUTOR', group: 'ENROLLED' }} />
      </div>
    </div>
  )
}

const SignUpCard = async ({ role, group }: Readonly<TUserRoleGroupCombination>) => (
  <div className='flex flex-row justify-center lg:w-[50%]'>
    <div className="flex flex-col items-center max-w-md bg-white rounded-lg gap-6 py-6 px-10">
      <div className="flex items-center">
        <H2>Sign Up</H2>
        <H2>&nbsp;|&nbsp;</H2>
        <P>{role === 'TUTOR' ? "Tutor" : (group === 'PARENT' ? "Parent" : "Student")}</P>
      </div>
      {
        role === 'TUTOR' ? <TutorRegisterForm group={group} /> :
          role === 'STUDENT' ? <StudentRegisterForm group={group} /> :
            redirect('/auth/login')
      }
      <Subtle className='w-full text-left text-text-secondary'>Already have an account? <Link href='/auth/login'>Sign in</Link></Subtle>
    </div>
  </div>
)

const RegisterPage = async ({ searchParams }: Readonly<{ searchParams: unknown }>) => {

  let params: TUserRoleGroupCombination | undefined = undefined;
  try {
    params = UserRoleGroupCombinationSchema.parse(searchParams);
  } catch (error) {
    params = undefined;
  }

  return (
    <React.Fragment>
      <div className='min-h-screen flex flex-col items-center justify-between py-4 gap-10'>
        <AuthHeader />
        {params ? <SignUpCard {...params} /> : <RoleSelectionCards />}
        <Subtle className='text-center text-text-secondary'>If you are having trouble signing up, email us at <Link href='mailto:contact@findyourtutor.co.uk'>contact@findyourtutor.co.uk</Link> or <Link href='/contact-us'>contact us</Link>.</Subtle>
      </div>
    </React.Fragment>
  );
}

export default RegisterPage;
