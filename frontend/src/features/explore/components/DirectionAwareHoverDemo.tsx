import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

interface DirectionAwareProps{
  imageUrl: string
  name: string
  preparation_time: number
  calories: number
}

export function DirectionAwareHoverDemo({imageUrl, name, preparation_time, calories}: DirectionAwareProps) {
  return (
    <DirectionAwareHover imageUrl={imageUrl} className={'flex-grow h-32 w-32 md:h-42 md:w-44 lg:w-44 lg:h-44'}>
      <p className="font-bold text-sm lg:text-xl">{name}</p>
      <p className="font-normal text-xs lg:text-sm">{calories}kcal / {preparation_time}min</p>
    </DirectionAwareHover>
  );
}
