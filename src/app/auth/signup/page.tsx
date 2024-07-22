import React, { ImgHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { UserRoleGroupCombinationSchema } from '@/lib/primitive-schema';
import { H1, Muted } from '@/components/Typography';

const RoleSelectionCards = () => {
	
	const AuthCard = ({ 
		heading, 
		description,
		image,
		role,
		group,
	}: Readonly<{ 
		heading: string, 
		description: string,
		role: string,
		group: string,  
		image: ImgHTMLAttributes<HTMLImageElement>
	}>) => (
		<div className='flex flex-col gap-4 bg-white rounded-lg p-6 text-wrap max-w-80 items-center'>
			<img src={image.src} alt={image.alt}/>
			<H1>{heading}</H1>
			<Muted className='text-center'>{description}</Muted>
			<form className='w-full'>
				<input type="hidden" name="role" value={role} />
				<input type="hidden" name="group" value={group} />
				<Button type="submit" className='w-full'>Sign Up</Button>
			</form>
		</div>
	)
	
	return (
		<React.Fragment>
			<AuthCard 
					heading='Parent' 
					description='Sign up as a parent to provide your children with the top-tier tutoring they deserve.' 
					image={{
						src: '/parent-svg.svg',
						alt: 'parent',
					}}
					role='student'
					group='parent'
				/>
				<AuthCard 
					heading='Student' 
					description='Sign up as a student to chat with tutors, book lessons, and meet your tutor.' 
					image={{
						src: '/student-svg.svg',
						alt: 'student',
					}}
					role='student'
					group='student'
				/>
				<AuthCard 
					heading='Tutor' 
					description='Sign up as a tutor to view booking requests and inspire new students' 
					image={{
						src: '/tutor-svg.svg',
						alt: 'tutor',
					}}
					role='tutor'
					group='enrolled'
				/>
		</React.Fragment>
	)
}

const TutorSignUpCard = () => {
	return (
		<React.Fragment>
			Tutor Sign Up Form Goes here
		</React.Fragment>
	)
}

const StudentSignUpCard = () => {
	return (
		<React.Fragment>
			Student Sign Up Form Goes here
		</React.Fragment>
	)
}

const AdminSignUpCard = () => {
	return (
		<React.Fragment>
			Admin Sign Up Form Goes here
		</React.Fragment>
	)
}



const SignUpPage = ({searchParams}: Readonly<{searchParams: any}>) => {

	let params: typeof UserRoleGroupCombinationSchema['_input'] | undefined = undefined;
	try {
		params = UserRoleGroupCombinationSchema.parse(searchParams);
	} catch (error) {
		params = undefined;
	}

	const resultCard = () => {
		if (params) {
			switch (params.role) {
				case 'tutor':
					return <TutorSignUpCard />
				case 'student':
					return <StudentSignUpCard />
				case 'admin':
					return <AdminSignUpCard />
				default:
					return <RoleSelectionCards />
			}
		} else {
			return <RoleSelectionCards />
		}
	}


	return (
		<div className='flex flex-1 flex-row flex-wrap justify-evenly items-center gap-20'>
			{resultCard()}
		</div>
	);
}

export default SignUpPage;