import { SignInSection } from "@/containers/auth-page/sign-in-section/signInSection";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = ({}) => {
  return (
    <div className="w-96">
      <SignInSection/>
    </div>
  )
}

export default SignIn;