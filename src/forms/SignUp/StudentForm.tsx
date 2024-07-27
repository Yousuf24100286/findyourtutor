"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { P } from "@/components/Typography";
import { useState } from "react";
import { SignUpFormSchema, TSignUpForm } from "@/schema/auth";


const StudentSignUpForm = ({ group, action, className }: Readonly<{ 
	group: 'student' | 'parent',
	action: (data: TSignUpForm) => void
	className?: string
}>) => {
	const form = useForm<TSignUpForm>({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			role: 'student',
			group: group,
			termsAndConditions: 0,
		}
	});

	const onSubmit = action;
	const [passwordVisible, setPasswordVisible] = useState(false);		


	return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit((e) => onSubmit(e))} className={className}>
        <FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder="Name" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="relative">
							<FormLabel>
								<div  className="w-full inline-flex justify-between">
									<P>Password</P>
									<Link href="/forgot-password"><P>Forgot Password</P></Link>
								</div>
							</FormLabel>
							<FormControl>
								<div className="relative">
									<Input type={passwordVisible == true ? 'text' : 'password'} className="pe-10"  placeholder="Password" {...field}  />
									<button className="material-symbols-outlined scale-75 m-1 absolute top-0 -right-0"
										onClick={() => setPasswordVisible(!passwordVisible)}
									>
										{passwordVisible == true ? 'visibility' : 'visibility_off'}
									</button>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="role"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input type="hidden" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="group"
					render={({ field }) => (
						<FormItem className="hidden">
							<FormControl>
								<Input type="hidden" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="termsAndConditions"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Checkbox {...field} onCheckedChange={(checked) => form.setValue('termsAndConditions', checked ? 1 : 0)}/> 
							</FormControl>
							<FormLabel>
								Remember Me
							</FormLabel>
							<FormMessage />
						</FormItem>
					)}
				/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

}

export default StudentSignUpForm