import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {RegisterForm} from "@/features/auth/components/RegisterForm";

export function RegisterScreen(){

  return (
    <Card className={'w-96'}>
      <CardHeader className={'flex items-center space-y-2'}>
        <CardTitle className={'text-2xl'}>Join us today!</CardTitle>
        <CardDescription className={'text-md text-center'}>Create an account to start managing your dashboard settings and projects</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm/>
      </CardContent>
    </Card>
  );
}