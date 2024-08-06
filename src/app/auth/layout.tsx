import React from 'react';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => 
  (await auth()) ? redirect('/') : 
  <div className="max-w-screen-lg mx-auto min-h-screen">{children}</div>

export default AuthLayout;