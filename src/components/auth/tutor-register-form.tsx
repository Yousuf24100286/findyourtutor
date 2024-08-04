"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";

import { TutorRegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";
import { toast } from "sonner";
import { Disabled, P } from "@/components/Typography";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const TutorRegisterForm = ({ group }: { group: 'ENROLLED' | 'GRADUATED' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof TutorRegisterSchema>>({
    resolver: zodResolver(TutorRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: 'TUTOR',
      group,
      termsAndConditions: false,
    },
  });

  const onSubmit = (values: z.infer<typeof TutorRegisterSchema>) => {
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          }
          if (data.success) {
            toast.success(data.success);
            form.reset();
          }
        })
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
          name="group"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <RadioGroup
                  {...field}
                  className="flex flex-col gap-4"
                  onValueChange={(value: 'ENROLLED' | 'GRADUATED') => form.setValue('group', value)}
                >
                  <div className="inline-flex gap-2">
                    <RadioGroupItem value="ENROLLED" />
                    <Label>Enrolled</Label>
                  </div>
                  <div className="inline-flex gap-2">
                    <RadioGroupItem value="GRADUATED" />
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
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="John Doe"
                />
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
                <Link href="/auth/reset"><P>Forgot Password</P></Link>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={passwordVisible == true ? 'text' : 'password'} className="pe-10" placeholder="Password" {...field} />
                  <button className="material-symbols-outlined m-2 absolute top-0 -right-0"
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
                <div className="inline-flex items-center justify-start gap-1">
                  <Checkbox {...field} 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    value={field.value?.toString()}
                    disabled={field.disabled}
                  />
                  <Disabled>You agree to our <Link href="/terms-and-conditions">Terms of Service</Link> and <Link href='/privacy-policy'>Privacy Policy</Link></Disabled>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} type="submit" className="w-full" >Submit</Button>
      </form>
    </Form >
  );
};
