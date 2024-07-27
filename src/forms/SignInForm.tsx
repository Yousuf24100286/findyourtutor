"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { P } from "@/components/Typography";
import { SignInFormSchema, TSignInForm } from '@/schema/auth';


const SignInForm = ({ action, className }: Readonly<{
	action: (data: TSignInForm) => void,
	className?: string
}>) => {
	const form = useForm<TSignInForm>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: 0,
		}
	});

	const onSubmit = action;
	return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="rememberMe"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Checkbox {...field} onCheckedChange={(checked) => form.setValue('rememberMe', checked ? 1 : 0)}/> 
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


export default SignInForm