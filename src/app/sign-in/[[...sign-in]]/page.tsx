'use client';

import { SignIn } from '@clerk/nextjs';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    document.title = "Sign In | UniRide";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-[#FAECEB] to-[#F6F1ED] px-4">
      <div className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-md shadow-xl rounded-3xl p-8 animate-fade-in-up">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-[#7b3f2c] mb-2">Welcome</h1>
          <p className="text-sm text-[#7b3f2c]">Sign in to continue your journey with UniRide</p>
        </div>

        <SignIn appearance={{
          elements: {
            formButtonPrimary: 'bg-[#7b3f2c] hover:bg-[#9e533c] text-white rounded-md text-sm font-semibold',
            card: 'shadow-none bg-transparent',
          }
        }} />
      </div>
    </div>
  );
}
