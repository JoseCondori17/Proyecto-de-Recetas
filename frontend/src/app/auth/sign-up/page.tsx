import SignUpSection from "@/containers/auth-page/sign-up-section/signUpSection";
import { NextPage } from 'next';

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = ({}) => {
  return (
    <div className="w-96">
      <SignUpSection/>      
    </div>
  )
}

export default SignUp;