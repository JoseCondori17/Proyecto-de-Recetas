import { SignInForm } from "@/components/common/form/sign-in/SignInForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SignInSection(){
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Welcome to Josee</CardTitle>
      </CardHeader>
      <CardContent>
        <SignInForm />
      </CardContent>
    </Card>
  )
}