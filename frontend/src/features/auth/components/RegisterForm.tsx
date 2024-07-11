'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AuthRegister,
  registerSchema
} from "@/interfaces/auth";
import {registerUser} from "@/features/auth/service/api";
import {redirect} from "next/navigation";

export function RegisterForm(){
  const form = useForm<AuthRegister>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: AuthRegister) {
    const response = await registerUser(values);
    console.log(response);
    if (!response.ok) {
      console.error(response.message);
    } else {
      redirect('/api/auth/signin')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-5'}>
        <FormField
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  className={'h-10'}
                  type={'text'}
                  placeholder={'Enter your full name'} {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          name={"fullName"}
          control={form.control}
        />
        <FormField
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  className={'h-10'}
                  type={'text'}
                  placeholder={'Enter your username'} {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          name={"username"}
          control={form.control}
        />
        <FormField
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input
                  className={'h-10'}
                  type={'email'}
                  placeholder={'Enter your email'} {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          name={"email"}
          control={form.control}
        />
        <div className={'flex gap-2'}>
          <FormField
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={'h-10'}
                    type={'password'}
                    placeholder={'Password'} {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
            name={"password"}
            control={form.control}
          />
          <FormField
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={'h-10'}
                    type={'password'}
                    placeholder={'Confirm password'} {...field} />
                </FormControl>
                <FormMessage></FormMessage>
              </FormItem>
            )}
            name={"confirmPassword"}
            control={form.control}
          />
        </div>
        <Button type={'submit'} className={'w-full'} size={'lg'}>Register</Button>
        <div className={'flex justify-center items-center mx-auto space-x-1'}>
          <span className={'opacity-85'}>Dont have an account?</span>
          <Link
            className={'text-blue-700 cursor-pointer'}
            href="/auth/sign-in">Sign In</Link>
        </div>
      </form>
    </Form>
  );
};