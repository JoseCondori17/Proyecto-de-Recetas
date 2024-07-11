import {DetailRecipeScreen} from "@/features/explore/screens/detailRecipeScreen";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/options";
import {redirect} from "next/navigation";

export default async function DetailsRecipe({ params }: { params: { id: string } }){
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/view/community');
  }

  return (
    <DetailRecipeScreen id={params.id}></DetailRecipeScreen>
  );
}