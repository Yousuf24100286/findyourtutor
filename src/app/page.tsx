import { H1, H2, H3, H4, P } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <H1>Rag 123</H1>
      <H2>Rag 123</H2>
      <H3>Rag 123</H3>
      <H4>Rag 123</H4>
      <P>Rag 123</P>
      <P className="text-text-primary">Rag 123</P>
      <P className="text-text-secondary">Rag 123</P>
      <P className="text-text-disabled">Rag 123</P>
    
      
      <Link href="/auth/login"><Button>Login</Button></Link>
      <Link href="/auth/register"><Button>Register</Button></Link>
      {
        session && <>
          Welcome {session.user.email}
          <Button onClick={() => signOut()}>Logout</Button>
        </>
      }
    </>
  )

}