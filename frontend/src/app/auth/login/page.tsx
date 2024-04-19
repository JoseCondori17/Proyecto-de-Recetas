import { ProfileForm } from "@/components/auth/formLogin"
import Image from "next/image";

export default function Login() {
  return ( 
    <>
      <div className="w-1/2 bg-your-background-color flex flex-col justify-center items-center space-y-12">
        <Image
          src={'/LogoRecipes.svg'}
          alt="Recipes Logo"
          width={120}
          height={120}
          priority 
        />
        <ProfileForm></ProfileForm>
        
      </div>
      <div className="w-1/2 bg-black">
        
      </div>
    </>
  )
}