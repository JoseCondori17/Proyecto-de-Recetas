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
import { SignInSchema } from '@/lib/types/SignIn.schema'


export function SignInForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof SignInSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Correo electrónico" 
                  className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0" 
                  {...field}  
                />
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
                  className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0"
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
          <span className='text-xs text-white'>Continuar</span>
        </Button>      
      </form>
    </Form>
  )
}