"use client"

import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const SigninFormSchema = z.object({
  email: z.string()
    .min(8, { message: 'Debe contener al menos 8 caracteres' })
    .max(50, { message: 'Debe contener maximo 50 caracteres' })
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,'Ingrese un correo valido'),
  password: z.string()
    .min(8, { message: 'Debe contener al menos 8 caracteres' })
    .max(16, { message: 'Debe contener maximo 16 caracteres' })
    .regex(/\d/,'Debe contener al menos un número')
    .regex(/[A-Z]/,'Debe contener al menos un letra en mayúscula')
    .regex(/[a-z]/,'Debe contener al menos un letra en minúscula')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un símbolo especial'),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof SigninFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-1/3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Correo electrónico" 
                  className="text-md rounded-xl"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  
                  placeholder="Contraseña" 
                  className="text-md rounded-xl"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <a href='#' className='block opacity-75 text-xs w-full text-right'>Olvidaste tu contraseña?</a>
        <Button 
          type="submit"
          className="bg-primary hover:opacity-85 rounded-xl w-full"
        >
          <span className='text-md text-white'>Continuar</span>
        </Button>
      
        <div className="flex space-x-2 w-full">
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
            <span className="text-md text-black">Google</span>
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
            <span className="text-md text-black">Apple</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}