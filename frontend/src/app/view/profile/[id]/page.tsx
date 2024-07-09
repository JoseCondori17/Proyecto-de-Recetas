import {ProfileScreen} from "@/features/profile/screens/profileScreen";

export default function Profile({ params }: { params: { id: string } }){
  return (
    <ProfileScreen id={params.id}></ProfileScreen>
  );
}