"use client"

import { Icon } from '@iconify/react'
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

const formSchema = z.object({
  email: z.string()
    .min(8)
    .max(50)
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,'Ingrese un correo valido'),
  password: z.string()
    .min(8)
    .max(16)
    .regex(/\d/,'Debe contener al menos un número')
    .regex(/[A-Z]/,'Debe contener al menos un letra en mayúscula')
    .regex(/[a-z]/,'Debe contener al menos un letra en minúscula')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un símbolo especial'),
})

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
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
              {/* <FormLabel>Email</FormLabel> */}
              <FormControl>
                <Input 
                  type="email " 
                  placeholder="Correo electrónico" 
                  className="text-xs rounded-xl"
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
              {/* <FormLabel>Password</FormLabel> */}
              <FormControl>
                <Input 
                  type="password" 
                  placeholder="Contraseña" 
                  className="text-xs rounded-xl"
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit"
          className="text-xs text-white bg-primary hover:opacity-85 rounded-xl w-full"
        >
          Continuar
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
            <span className="text-xs text-black">Google</span>
          </Button>
          <Button 
            className="outline outline-1 outline-gray-200 rounded-xl w-full bg-transparent hover:bg-inherit"
          >
            <Image
              src={'/icons/icons-apple.svg'}
              alt="Apple Logo"
              width={20}
              height={20}
              priority 
            />
            <span className="text-xs text-black">Apple</span>
          </Button>
        </div>
      </form>
    
    </Form>
  )
}