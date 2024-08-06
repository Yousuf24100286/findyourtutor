import { H1, H2, H3, H4, P } from "@/components/Typography";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

export default function Home() {
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
    </>
  )

}