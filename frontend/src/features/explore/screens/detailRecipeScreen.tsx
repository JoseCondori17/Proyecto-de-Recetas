import {getRecipeId} from "@/features/explore/service/api";
import {Clock01Icon, FavouriteIcon, FireIcon} from "hugeicons-react";
import {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
} from "@/components/ui/tabs";
import Image from "next/image";
import {RecipeInterface} from "@/interfaces/recipe";

export async function DetailRecipeScreen({id}: {id: string}) {
  const data: RecipeInterface = await getRecipeId(id);

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-2 gap-4">
      <Image
        src={data.Imagen}
        alt={data.Receta_id.toString()}
        unoptimized
        width={1080}
        height={1080}
        className='w-full rounded-xl select-none'
      />
      <span className='text-2xl text-center font-bold'>{data.Nombre}</span>
      <div className='flex justify-between text-sm'>
        <div className='flex items-center gap-2'>
          <Clock01Icon size={'20'} className={'text-primary'}></Clock01Icon>
          <span>{data.Tiempo_Preparacion} min</span>
        </div>
        <div className='flex items-center gap-2'>
          <FireIcon className={'text-primary'}></FireIcon>
          <span>{data.Calorias} kcal</span>
        </div>
        <div className='flex items-center gap-2'>
          <FavouriteIcon className={'text-primary'}></FavouriteIcon>
          <span>{data.Likes}</span>
        </div>
      </div>
      <Tabs defaultValue="ingredients" className="flex flex-col w-full gap-4 my-5">
        <TabsList className="flex w-full items-center justify-between gap-2 bg-inherit">
          <TabsTrigger value="ingredients" className='w-48 h-8 text-xs bg-gray-200 data-[state=active]:bg-primary data-[state=active]:text-white'>Ingredients</TabsTrigger>
          <TabsTrigger value="instructions" className='w-48 h-8 text-xs bg-gray-200 data-[state=active]:bg-primary data-[state=active]:text-white'>Instructions</TabsTrigger>
        </TabsList>
        <TabsContent value="ingredients">
          <ul className='list-disc text-xs px-4'>
            {data.Descripcion_ingredientes.split('\n').map((item: any, index: number) => (
              <li key={index} className='p-2'>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="instructions">
          <ul className='list-decimal text-xs px-4'>
            {data.Instrucciones.split('\n').map((item: any, index: number) => (
              <li key={index} className='p-2'>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </div>
  );
}