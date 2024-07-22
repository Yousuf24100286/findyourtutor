import React, { ImgHTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { UserRoleGroupCombinationSchema } from '@/lib/primitive-schema';
import { Card, CardHeader } from '@/components/ui/card';

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
			<h1 className='text-3xl font-bold text-prussian-blue'>{heading}</h1>
			<p className='text-center'>{description}</p>
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
		<Card className='min-w-96 p-6'>
			<CardHeader className='flex flex-row'>
				<h1>Sign Up </h1>
				<h1> | </h1>
				<h1>kjfdshk</h1>
			</CardHeader>
			Tutor Sign Up Form Goes here
		</Card>
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


// <div class="w-[1123px] h-[353.10px] justify-center items-center gap-20 inline-flex">
//   <div class="p-6 bg-white rounded-lg flex-col justify-center items-center gap-4 inline-flex">
//     <div class="w-[121px] h-[97.10px] relative">
//       <div class="w-[78.01px] h-[97.10px] left-[43px] top-0 absolute">
//         <div class="w-[38.95px] h-11 left-[16.90px] top-[26.61px] absolute">
//           <div class="w-[15.32px] h-[13.17px] left-[8.16px] top-0 absolute">
//           </div>
//           <div class="w-8 h-[30.60px] left-[6.93px] top-[13.40px] absolute">
//           </div>
//         </div>
//         <div class="w-[17.90px] h-[31.16px] left-[60.11px] top-[65.94px] absolute">
//         </div>
//         <div class="w-[38.37px] h-[31.61px] left-[10.97px] top-0 absolute">
//           <div class="w-[7.48px] h-[6.91px] left-[2.69px] top-[17.60px] absolute">
//             <div class="w-[3.01px] h-[2.82px] left-[1.28px] top-[2.05px] absolute">
//             </div>
//           </div>
//           <div class="w-[8.40px] h-[7.47px] left-[29.97px] top-[17.17px] absolute">
//             <div class="w-[3.01px] h-[2.82px] left-[3.65px] top-[2.34px] absolute">
//             </div>
//           </div>
//           <div class="w-[19.38px] h-[14.36px] left-[8.09px] top-[12.55px] absolute">
//           </div>
//         </div>
//       </div>
//       <div class="w-[54.73px] h-[85.91px] left-0 top-[7.53px] absolute">
//         <div class="w-[51.79px] h-[56.38px] left-[2.94px] top-[29px] absolute">
//           <div class="w-[6.92px] h-[20.22px] left-[15.29px] top-[8.98px] absolute">
//           </div>
//         </div>
//         <div class="w-[17.91px] h-[14.28px] left-[21.38px] top-[24.59px] absolute">
//         </div>
//         <div class="w-[15.49px] h-[32.82px] left-0 top-[53.09px] absolute">
//         </div>
//         <div class="w-[37.40px] h-[29.29px] left-[12.05px] top-0 absolute">
//           <div class="w-[7.47px] h-[6.91px] left-[29.93px] top-[13.72px] absolute">
//             <div class="w-[2.69px] h-[3.16px] left-[3.54px] top-[1.77px] absolute">
//             </div>
//           </div>
//           <div class="w-[7.63px] h-[6.82px] left-[2px] top-[18.23px] absolute">
//             <div class="w-[3.65px] h-[2.56px] left-[1.06px] top-[2.31px] absolute">
//             </div>
//           </div>
//           <div class="w-[20.53px] h-[12.80px] left-[11.69px] top-[11.80px] absolute">
//             <div class="opacity-50 w-[20.53px] h-[4.65px] left-0 top-[6.07px] absolute">
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div class="text-center text-sky-950 text-3xl font-semibold font-['Poppins'] leading-9">Parent</div>
//     <div class="w-[273px] text-center text-slate-950/opacity-60 text-base font-normal font-['Poppins'] leading-7">Sign up as a parent to provide your children with the top-tier tutoring they deserve.</div>
//     <div class="w-[273px] h-10 px-[25px] py-2.5 bg-orange-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
//       <div class="text-white text-sm font-medium font-['Inter'] leading-normal">Sign up</div>
//     </div>
//   </div>
//   <div class="w-[321px] p-6 bg-white rounded-lg flex-col justify-center items-center gap-4 inline-flex">
//     <div class="w-[121px] h-[97.10px] relative">
//       <div class="w-[67.31px] h-[35.12px] left-0 top-[61.91px] absolute">
//       </div>
//     </div>
//     <div class="self-stretch text-center text-sky-950 text-3xl font-semibold font-['Poppins'] leading-9">Student</div>
//     <div class="self-stretch text-center text-slate-950/opacity-60 text-base font-normal font-['Poppins'] leading-7">Sign up as a student to chat with tutors, book lessons, and meet your tutor.</div>
//     <div class="self-stretch h-10 px-[25px] py-2.5 bg-orange-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
//       <div class="text-white text-sm font-medium font-['Inter'] leading-normal">Sign up</div>
//     </div>
//   </div>
//   <div class="w-[321px] p-6 bg-white rounded-lg flex-col justify-center items-center gap-4 inline-flex">
//     <div class="w-[121px] h-[97.10px] relative">
//     </div>
//     <div class="self-stretch text-center text-sky-950 text-3xl font-semibold font-['Poppins'] leading-9">Tutor</div>
//     <div class="self-stretch text-center text-slate-950/opacity-60 text-base font-normal font-['Poppins'] leading-7">Sign up as a tutor to view booking requests and inspire new students</div>
//     <div class="self-stretch h-10 px-[25px] py-2.5 bg-orange-400 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
//       <div class="text-white text-sm font-medium font-['Inter'] leading-normal">Sign up</div>
//     </div>
//   </div>
// </div>

