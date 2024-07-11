import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Add01Icon, Calendar01Icon, Location01Icon, SentIcon} from "hugeicons-react";
import {Separator} from "@/components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent, CardDescription,
} from "@/components/ui/card";
import {ParallaxScrollDemo} from "@/features/profile/components/ParallaxScrollDemo";
import {getProfile} from "@/features/profile/service/api";

export async function ProfileScreen({id}: {id: string}) {
  const response = await getProfile(id);

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-2 gap-4">
      <div className="w-full h-64 bg-gray-500 rounded-xl"></div>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between relative">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 -mt-16">
          <Avatar className="w-32 h-32 lg:w-36 lg:h-36 border-4 border-white">
            <AvatarImage src={id} alt="profile"/>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center lg:items-start lg:translate-y-14 lg:justify-center">
            <span className="text-xl font-semibold">{response.data.Nombre_y_apellidos}</span>
            <span className="text-gray-500">@{response.data.Username}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-6 lg:mt-0">
          <Button variant="outline" className="flex items-center gap-2">
            <SentIcon size={18} />
            <span>Send</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Add01Icon size={18} />
            <span>Follow</span>
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div className={'hidden lg:block lg:w-1/3 lg:space-y-4'}>
          <Card className="">
            <CardHeader className={'p-4'}>
              <CardTitle>About me</CardTitle>
            </CardHeader>
            <Separator/>
            <CardDescription className={'p-4'}>{response.data.Presentacion}</CardDescription>
            <Separator/>
            <CardContent className="space-y-2 p-4">
              <div className="flex flex-col text-sm text-gray-500 gap-2">
                <div className={'flex item-center gap-2'}>
                  <Location01Icon size={20}></Location01Icon>
                  <span>Place</span>
                </div>
                <div className={'flex items-center gap-2'}>
                  <Calendar01Icon size={20}></Calendar01Icon>
                  <span>Joined, June 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className={'p-4'}>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className="space-y-2 p-4">
              <ParallaxScrollDemo></ParallaxScrollDemo>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-2/3">
          <Tabs defaultValue="post" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="post">Post</TabsTrigger>
              <TabsTrigger value="like">Likes</TabsTrigger>
              <TabsTrigger value="save">Save</TabsTrigger>
            </TabsList>
            <TabsContent value="post">uno</TabsContent>
            <TabsContent value="like">dos</TabsContent>
            <TabsContent value="save">tres</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}