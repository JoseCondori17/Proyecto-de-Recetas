import SignUpForm from "@/components/common/form/sign-up/SignUpForm"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const SignUpSection = () => {
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

export default SignUpSection;