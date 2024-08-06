"use client";

import * as z from "zod";
import { useEffect, useState, useTransition } from "react";
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
import { Disabled, P, Subtle } from "@/components/Typography";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const TutorRegisterForm = ({ group }: { group: 'ENROLLED' | 'GRADUATED' }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const universitiesList: {
    name: string;
    domain: string;
  }[] = [
    {
      name: "not applicable",
      domain: "",
    },
    {
      name: "university1",
      domain: "@university1.com",
    },
    {
      name: "university2",
      domain: "@university2.com",
    },
    {
      name: "university3",
      domain: "@university3.com",
    }
  ]


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

  const [openDropDown, setOpenDropDown] = useState(false)
  const [universityState, setUniversityState] = useState<{
    name: string;
    domain: string
  } | undefined>(undefined)
  const [groupState, setGroupState] = useState(group)
  const [domainState, setDomainState] = useState('')
  const [emailState, setEmailState] = useState('')

  
  const onSubmit = (values: z.infer<typeof TutorRegisterSchema>) => {
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          }
          if (data.success) {
            toast.success(data.success);
          }
        })
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form.getValues())
          form.handleSubmit(onSubmit)();
        }}
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
                  onValueChange={(value: 'ENROLLED' | 'GRADUATED') => {
                    form.setValue('group', value)
                    setUniversityState(undefined)
                    setDomainState('')
                    setEmailState('')
                    setGroupState(value)
                  }}
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
              <FormLabel className="inline-flex items-center">
                University
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="material-symbols-outlined scale-75 text-text-secondary">info</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <Subtle className='text-text-secondary'>If your university does not provide an email with the university domain, select &lsquo;not applicable&rsquo; from the drop-down menu.</Subtle>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <FormControl>
                <div>
                  <Popover open={openDropDown} onOpenChange={setOpenDropDown}>
                    <PopoverTrigger asChild
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={openDropDown}
                        className={`flex justify-between h-10 w-full rounded-md border border-border px-4 py-2 bg-transparent hover:bg-transparent text-base font-normal focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2 focus-visible:ring-offset-white ${universityState ? "text-text-primary hover:text-text-primary" : "text-text-placeholder hover:text-text-placeholder"}`}
                        disabled={groupState === 'GRADUATED'}
                      >
                        {universityState
                          ? universitiesList.find((university) => university.name === universityState.name)?.name
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
                                key={university.name}
                                value={university.domain}
                                onSelect={(currentValue) => {
                                  const university = universitiesList.find(
                                    (university) => university.domain === currentValue
                                  )
                                  setDomainState(university ? university.domain : '')
                                  setUniversityState(university)
                                  setEmailState('')
                                  form.setValue('university', university?.name)
                                  setOpenDropDown(false)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    universityState?.name === university.name ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {university.name}
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
                <div className="relative">
                  <Input placeholder="Email"  
                    disabled={isPending}
                    {...field}
                    value={emailState}
                    autoComplete="off"
                    onChange={(e) => {
                      setEmailState(e.target.value)
                      form.setValue('email', e.target.value + domainState)
                    }}
                    
                    className={`${domainState ? 'pe-40': ''}`}
                  />
                  <span className="my-2 mx-4 max-w-36 overflow-hidden absolute top-0 -right-0">
                    <P>{domainState ? domainState : null}</P>
                  </span>
                </div>
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
              <FormLabel>
                Password
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Input type={passwordVisible == true ? 'text' : 'password'} className="pe-12" placeholder="Password" {...field} />
                  <button className="material-symbols-outlined my-2 mx-4 absolute top-0 -right-0"
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
