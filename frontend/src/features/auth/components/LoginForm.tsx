'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AuthLogin,
  loginSchema
} from "@/interfaces/auth";
import {useRouter} from "next/navigation";
import {verifyLogin} from "@/features/auth/service/api";

export function LoginForm() {
  const router = useRouter()
  const form = useForm<AuthLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AuthLogin) {

    const response = await verifyLogin(values);

    if (!response.ok) {
      console.error(response.message);
      throw new Error(response.message);
    } else {
      router.push("/view/community");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-5'}>
        <FormField
          render={({field}) => (
            <FormItem>
              <FormLabel></FormLabel>
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
        <FormField
          render={({field}) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Input
                  className={'h-10'}
                  type={'password'}
                  placeholder={'Enter your password'} {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
          name={"password"}
          control={form.control}
        />
        <Button type={'submit'} className={'w-full'} size={'lg'}>Continue</Button>
        <div className={'flex justify-center items-center mx-auto space-x-1'}>
          <span className={'opacity-85'}>Dont have an account?</span>
          <Link
            className={'text-blue-700'}
            href="/auth/sign-up">Sign Up</Link>
        </div>
      </form>
    </Form>
  );
}