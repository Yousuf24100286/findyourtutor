import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  return session ? redirect('/') : (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default AuthLayout;