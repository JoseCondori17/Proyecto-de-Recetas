"use client"

import Image from 'next/image'
import { SignInForm } from '@/components/auth/SignInForm'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SignIn() {
  return (
    <>
      <div className="w-1/2 max-sm:w-full flex flex-col">
        <nav className='flex m-3'>
          <Image
            src={'/LogoRecipes.svg'}
            alt="Recipes Logo"
            width={100}
            height={100}
            priority 
          />
        </nav>
        <div className='flex flex-col justify-center items-center h-full'>
          <div className='max-sm:w-2/3 max-md:w-1/2 max-lg:w-2/3 max-xl:w-1/2 max-2xl:w-1/2 w-1/3  space-y-6'>
            <h1 className='text-5xl max-md:text-3xl text-center font-normal'>¡Bienvenido a la Aventura!</h1>
            <div className='space-y-6'>
            <SignInForm></SignInForm>
            <Separator></Separator>
            <div className="flex space-x-2">
              <Button 
                className="outline outline-1 outline-gray-200 rounded-xl w-full bg-transparent hover:bg-inherit space-x-1"
              >
                <Image
                  src={'/icons/icons-google.svg'}
                  alt="Google Logo"
                  width={20}
                  height={20}
                  priority 
                />
                <a href='#' className="text-md text-black">Google</a>
              </Button>
              <Button 
                className="outline outline-1 outline-gray-200 rounded-xl w-full bg-transparent hover:bg-inherit space-x-1"
              >
                <Image
                  src={'/icons/icons-apple.svg'}
                  alt="Apple Logo"
                  width={18}
                  height={18}
                  priority 
                />
                <a href='#' className="text-md text-black">Apple</a>
              </Button>
            </div>
            <p className='text-xs opacity-75 text-center'>
              No tienes una cuenta? <Link href={'/auth/signup'} className='font-bold'>Registrate</Link>
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen max-sm:w-0">
        <img src='/img/bg-image.jpg' className='w-full h-full bg-fixed'></img>
      </div> 
    </>
  )
}