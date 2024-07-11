import {ExploreScreen} from "@/features/explore/screens/exploreScreen";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";

export default async function Explore() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/view/community');
  }

  return (
    <ExploreScreen></ExploreScreen>
  );
}