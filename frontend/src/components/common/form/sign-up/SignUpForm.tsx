'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
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
import Link from "next/link"
import { SignUpSchema } from "@/lib/types/SignUp.schema"

/* interface SignUpFormProps{} */

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  }) 

  async function onSubmit(values: z.infer<typeof SignUpSchema>){
    const body = {
      'Username': values.email.slice(0, 1) + values.name.slice(2, 3) + values.email.slice(1, 2),
      'Correo_electronico': values.email,
      'Contrasena': values.password,
      'Nombre_y_apellidos': values.name,
      "Edad": 20, 
      "Fecha_de_nacimiento": "1999-01-01",
      "Sexo": "Masculino",
      "Presentacion": "Hola, soy un usuario de ejemplo.",
      "Num_seguidores": 10,
      "Num_seguidos": 5
    }
    try {
      const response = await fetch('https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/PostUserr/Cocina/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      } else {
        router.push("/home/recipes");
      }
    } catch (error) {
      /* setError(error.message || 'Failed to register user'); */
      console.log(body)
      /* console.log('Failed', error, body) */
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"                  
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex justify-end text-[0.8rem] hover:text-blue-600">
                <Link
                  href={'#'}
                >
                  Forgot password?
                </Link>
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-2">
          <Button type="submit" className="w-full">Sign Up</Button>
          <div className="flex justify-center space-x-2 text-[0.8rem] text-muted-foreground">
            <span>Already have an account?</span>
            <Link
              className="text-blue-600"
              href={'/auth/sign-in'}
            >
              Sign in
            </Link>
          </div>
          {/* <div className="relative flex items-center w-full pt-4 pb-4">
            <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 z-10 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Button className="w-full">Sign up with Google</Button> */}
        </div>
      </form>
    </Form>
  )
}

export default SignUpForm;