"use client"

import Image from 'next/image'
import { SignUpForm } from '@/components/auth/SignUpForm'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function SignUp() {
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
          <div className='max-sm:w-2/3 w-1/3 space-y-6'>
            <h1 className='text-5xl max-md:text-3xl text-center font-normal'>¡Bienvenido a la Aventura!</h1>
            <SignUpForm></SignUpForm>
            <p className='text-xs opacity-75 text-center'>
              Ya tienes una cuenta? <Link href={'/auth/signin'} className='font-bold'>Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen max-sm:w-0">
        <img src='/img/bg-image.jpg' className='w-full h-full bg-fixed'></img>
      </div> 
    </>
  )
}