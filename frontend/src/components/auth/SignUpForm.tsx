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
import { SignUpSchema } from '@/lib/types/SignUp.schema'

export function SignUpForm() {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  })
  
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    const url = 'https://z6gveccla8.execute-api.us-east-1.amazonaws.com/Prueba/recetas/registro'

    const value = {
      'Username': values['firstName'][0]+values['lastName'][0]+values['email'][1],
      'Correo_electronico': values['email'],
      'Contrasena': values['password'],
      'Nombre_y_apellidos': values['firstName'] + ' ' + values['lastName'],
      'Edad': 0,
      'Fecha_de_nacimiento': '',
      'Sexo': '',
      'Presentacion': '',
      'Num_seguidores': 0,
      'Num_seguidos': 0
    }

    const requestOptions: RequestInit = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(value)
    };

    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        console.log('Registro exitoso');
      } else {
        console.error('Error al registrar:', response.statusText);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
        <div className='flex space-x-3'>
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Nombre" 
                    className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0" 
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="Apellido" 
                    className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0" 
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input 
                  placeholder="Correo electrónico" 
                  className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0" 
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
                  className="text-xs rounded-xl focus-visible:ring-offset-0 focus-visible:ring-0" 
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit"
          className="bg-primary hover:opacity-85 rounded-xl w-full"
        >
          <span className='text-xs text-white'>Registrarme</span>
        </Button> 
      </form>
    </Form>
  )
}