import { Card } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'
import ContactForm from '../_components/contact-form';

const ContactUsPage = () => {
  return (
    <section className="flex flex-col">
      <div className="py-1 px-[180px]">
        <Link href="/" className="flex w-max">
          <img
            src="/contact-us/logo.png"
            alt="tutoring company logo"
            className="h-16 px-0"
          />
        </Link>
      </div>
      <section className="flex pt-16 pb-6 w-full text-white bg-sky-950">
        <div className="max-w-6xl relative w-full mx-auto px-2">
          <h2 className="text-5xl font-semibold">
            Lets talk!
          </h2>
          <p className="mt-7 text-sm leading-5">
            Say hi to us! We&apos;d love to hear from you. <br />{' '}
            Your questions, suggestions, and feedback are
            valued.
          </p>
          <img
            src="/contact-us/contact-mailbox.svg"
            alt="Contact Mailbox Illustration"
            className="absolute right-0 -bottom-24"
          />
        </div>
      </section>
      <main className="bg-[#F9F2E0]">
        <Card className="flex mx-auto py-4 px-8 my-12 w-[970px] justify-between">
          <ContactForm />
          <aside className="ml-5 max-md:ml-0 max-md:w-full">
            <div className="mt-24 text-sm leading-5 text-center text-black max-md:mt-10">
              <img
                src="/contact-us/contact-female-illustration.svg"
                alt="Need help?"
                className=""
              />
              <p className="self-center mt-8">
                Need help with anything? <br /> No worries,
                we&apos;ve got your back! Our technical <br />
                experts are here for you.
              </p>
            </div>
          </aside>
        </Card>
      </main>
    </section>
  )
}

export default ContactUsPage;