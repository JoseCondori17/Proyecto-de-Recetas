import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";
import {SettingScreen} from "@/features/configuration/screens/settingScreen";

export default async function Setting(){
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/view/community');
  }

  return (
    <SettingScreen></SettingScreen>
  );
}