'use client'

import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { useSession } from "next-auth/react";
import { P } from "@/components/Typography";


export default function Home() {
  const { data: session } = useSession();
  return (
    <LoginButton asChild>
      <Button variant="secondary" size="lg">
        Sign in
      </Button>
      <P>
        {session ? JSON.stringify(session) : "You're not signed in"}
      </P>
    </LoginButton>
  )
}
