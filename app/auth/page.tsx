import Logo from '@/components/custom/logo'
import SignInBtn from '@/components/custom/sign-in.btn'
import React from 'react'

export default function Page() {
  return (
    <div className="h-screen flex flex-col">
      <header className="w-full fixed left-0 top-0 p-5 md:p-10">
        <Logo />
      </header>

      <main className="flex-1 flex items-center justify-center px-6 md:px-0">
        <div className="w-full max-w-md text-center">
          <h1 className="font-medium text-3xl bg-gradient-to-r from-primary dark:via-primary dark:to-[#848484] to-[#000] inline-block text-transparent bg-clip-text">
            Login to middle-ai.
          </h1>

          <p className="font-medium text-2xl text-[#878787] mt-4">
            Automate financial tasks, <br />
            stay organized, and make <br />
            informed decisions effortlessly.
          </p>

          <div className="mt-6">
            <SignInBtn />
          </div>
        </div>
      </main>
    </div>
  )
}