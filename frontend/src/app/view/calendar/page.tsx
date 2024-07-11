import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";

export default async function Calendar(){
  const session = await getServerSession(authOptions)
  if (!session){
    redirect('/api/auth/signin?callbackUrl=/view/community');
  }

  return (
    <span>Calendar</span>
  );
}