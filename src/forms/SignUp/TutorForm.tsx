"use client"
import { TutorSignUpFormSchema, TTutorSignUpForm } from '@/schema/auth';
import Link from "next/link"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox";
import { P } from "@/components/Typography";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TutorSignUpForm = ({ group, action, className }: Readonly<{ 
	group: 'enrolled' | 'graduate'
	action: (data: TTutorSignUpForm) => void
	className?: string
}>) => {
	const form = useForm<TTutorSignUpForm>({
		resolver: zodResolver(TutorSignUpFormSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			role: 'tutor',
			group: group,
			termsAndConditions: 0,
		}
	});
	const [passwordVisible, setPasswordVisible] = useState(false);

	const onSubmit = action;

	return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit((e) => {
				onSubmit(e)
			})} className={className}>
				<FormField
					control={form.control}
					name="group"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<RadioGroup {...field} className="flex flex-col gap-4" onValueChange={(value) => form.setValue('group', value)}>
									<div className="inline-flex gap-2">
										<RadioGroupItem value="enrolled"/>
										<Label>Enrolled</Label>
									</div>
									<div className="inline-flex gap-2">
										<RadioGroupItem value="graduate"/>
										<Label>Graduate</Label>
									</div>
								</RadioGroup>
							</FormControl>
						</FormItem>
					)}
				/>
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
					name="university"
					render={({ field }) => (
						<FormItem>
							<FormLabel>University</FormLabel>
							<FormControl>
								<Select {...field}>
									<SelectTrigger
										className="w-full"
									>
										<SelectValue>Select University</SelectValue>
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="university1">University 1</SelectItem>
										<SelectItem value="university2">University 2</SelectItem>
										<SelectItem value="university3">University 3</SelectItem>
									</SelectContent>
								</Select>
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
						<FormItem>
							<FormLabel className="w-full inline-flex justify-between">
								<P>Password</P>
								<Link href="/forgot-password"><P>Forgot Password</P></Link>
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

export default TutorSignUpForm
