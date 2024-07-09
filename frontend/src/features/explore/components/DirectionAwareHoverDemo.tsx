import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

export function DirectionAwareHoverDemo({imageUrl}: {imageUrl: string}) {
  return (
    <DirectionAwareHover imageUrl={imageUrl} className={'flex-grow h-32 w-32 md:h-42 md:w-44 lg:w-44 lg:h-44'}>
      <p className="font-bold text-xl">In the mountains</p>
      <p className="font-normal text-sm">$1299 / night</p>
    </DirectionAwareHover>
  );
}
