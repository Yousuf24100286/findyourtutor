'use client';

import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useCurrentUser();
  const router = useRouter();

  if (user) router.push('/dashboard');
  else router.push('/auth/login');
}