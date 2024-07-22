"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox";
import { P } from "@/components/Typography";


const SignInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	rememberMe: z.number(),
}); 

const SignInForm = () => {
	const form = useForm<z.infer<typeof SignInFormSchema>>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: '',
			password: '',
			rememberMe: 0,
		}
	});

	const onSubmit = (data: z.infer<typeof SignInFormSchema>) => {
		console.log(data);
	}

	return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8">
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
								<Link href="/forgot-password" className="ml-2">Forgot Password</Link>
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