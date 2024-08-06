"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { toast } from "sonner";

import { P, Subtle } from "@/components/Typography";
import { Checkbox } from "../ui/checkbox";


export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            if (data.error) toast.error(data.error);
          }

          if (data?.success) {
            form.reset();
            if (data.success) toast.success(data.success);
          }
        })
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-8"
      >
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
                Password
                <Link href="/auth/reset">Forgot Password</Link>
              </FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
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
                <div className="inline-flex items-start justify-start gap-1">
                  <Checkbox {...field} 
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      value={field.value?.toString()}
                      disabled={field.disabled}
                      className="my-1"
                    />
                  <div>
                    <P className="leading-none">Remember Me</P>
                    <Subtle className="text-text-disabled">Check this box keeps you logged in</Subtle>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isPending}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form >
  );
};
