import React from "react";
import Link from "next/link";
import Image from "next/image";

export const AuthHeader = () => {
  return (
    <header className="flex items-center justify-between h-16 mx-2">
      <Link href="/" className="flex w-max">
        <Image src="/FYT-logo.png" alt="tutoring company logo" width={60} height={60} />
      </Link>
      <Link href="/">Go back</Link>
    </header>
  )
};

