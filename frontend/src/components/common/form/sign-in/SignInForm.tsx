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
import { SignInSchema } from "@/lib/types/SignIn.schema"

/* interface SignInFormProps{} */

const SignInForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  }) 

  async function onSubmit(values: z.infer<typeof SignInSchema>){
    const body = {
      'Correo_electronico': values.email,
      'Contrasena': values.password,
    }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    try {
      const response = await fetch('https://h0z4t4u2d9.execute-api.us-east-1.amazonaws.com/Production/Cocina/login', requestOptions);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      } 
      router.push("/home");
    } catch (error) {
      /* setError(error.message || 'Failed to register user'); */
      console.log(body)
      console.log('Failed', error, body)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
              <FormDescription className="flex justify-end hover:text-blue-600">
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
          <Button type="submit" className="w-full">Get started</Button>
          <div className="flex justify-end space-x-2 text-[0.8rem] text-muted-foreground">
            <span>Don&apos;t have an account?</span>
            <Link
              className="text-blue-600"
              href={'/auth/sign-up'}
            >
              Sign up
            </Link>
          </div>
          <div className="relative flex items-center w-full pt-4 pb-4">
            <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 z-10 text-gray-400 text-xs">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <Button type="submit" className="w-full">Sign in with Google</Button>
        </div>
      </form>
    </Form>
  )
}

export default SignInForm;