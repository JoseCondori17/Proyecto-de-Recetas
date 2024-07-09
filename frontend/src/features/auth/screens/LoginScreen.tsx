import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import {LoginForm} from "@/features/auth/components/LoginForm";

export function LoginScreen() {
  return (
    <Card className={'w-96 shadow'}>
      <CardHeader className={'flex items-center space-y-2'}>
        <CardTitle className={'text-2xl'}>Welcome back!</CardTitle>
        <CardDescription className={'text-md text-center'}>Sign In to access your dashboard settings and projects.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm/>
      </CardContent>
    </Card>
  );
}