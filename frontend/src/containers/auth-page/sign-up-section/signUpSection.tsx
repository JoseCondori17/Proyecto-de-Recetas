import { SignUpForm } from "@/components/common/form/sign-up/SignUpForm"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SignUpSection(){
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">Create your account</CardTitle>
      </CardHeader>
      <CardContent>
        <SignUpForm/>
      </CardContent>
    </Card>
  )
}