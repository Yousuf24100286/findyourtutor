"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils"

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export const TutorRegisterForm = ({ group }: { group: 'ENROLLED' | 'GRADUATED' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const universitiesList: {
    value: string;
    label: string;
  }[] = [
    {
      value: "university1",
      label: "University 1",
    },
    {
      value: "university2",
      label: "University 2",
    },
    {
      value: "university3",
      label: "University 3",
    }
  ]

  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  const form = useForm<z.infer<typeof TutorRegisterSchema>>({
    resolver: zodResolver(TutorRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      university: "",
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
          name="university"
          render={({ field }) => (
            <FormItem>
              <FormLabel>University</FormLabel>
              <FormControl>
                <div>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className={`flex justify-between h-10 w-full rounded-md border border-border px-4 py-2 bg-transparent hover:bg-transparent text-base font-normal focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-white ${value ? "text-text-primary hover:text-text-primary" : "text-text-placeholder hover:text-text-placeholder"}`}
                      >
                        {value
                          ? universitiesList.find((university) => university.value === value)?.label
                          : "Select university..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search university..." />
                        <CommandList>
                          <CommandEmpty>No university found.</CommandEmpty>
                          <CommandGroup>
                            {universitiesList.map((university) => (
                              <CommandItem
                                key={university.value}
                                value={university.value}
                                onSelect={(currentValue) => {
                                  setValue(currentValue === value ? "" : currentValue)
                                  setOpen(false)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    value === university.value ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {university.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </div>
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
                Password
                <Link href="/auth/reset">Forgot Password</Link>
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
                <div className="inline-flex items-start justify-start gap-1">
                  <Checkbox {...field} 
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    value={field.value?.toString()}
                    disabled={field.disabled}
                    className="my-1"
                  />
                  <Disabled className="">You agree to our <Link href="/terms-and-conditions">Terms of Service</Link> and <Link href='/privacy-policy'>Privacy Policy</Link></Disabled>
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
