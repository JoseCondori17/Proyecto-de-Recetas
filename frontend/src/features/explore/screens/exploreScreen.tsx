import {DirectionAwareHoverDemo} from "@/features/explore/components/DirectionAwareHoverDemo";
import {Input} from "@/components/ui/input";
import {Search01Icon} from "hugeicons-react";
import {CarouselCard} from "@/features/explore/components/CarouselCard";

export function ExploreScreen(){
  const imageUrl = "/images/image-example-1.jpg";
  /*'flex flex-col w-screen lg:max-w-7xl gap-4'*/
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-2 gap-4">
      <div className={'flex items-center gap-1 border rounded-xl p-1 pl-3 pr-3 w-full lg:w-1/3'}>
        <Search01Icon size={'20'}></Search01Icon>
        <Input placeholder={'Search in RIIKO'}
               className={'focus-visible:ring-0 border-0 shadow-none'}/> {/*complementar el motor de busqueda con las apis*/}
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'font-bold'}>Populars</span>
        <CarouselCard></CarouselCard>
      </div>
      <div className={'flex flex-col gap-2'}>
        <span className={'font-bold'}>Recipes</span>
        <div className={'flex flex-wrap gap-2'}> {/*usar map para la iteracion de las imagenes*/}
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
          <DirectionAwareHoverDemo imageUrl={imageUrl}/>
        </div>
      </div>

    </div>
  );
}