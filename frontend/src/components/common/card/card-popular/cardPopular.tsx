import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { SaveIcon } from '@/components/icons/SaveIcon';
import { FavoritesIcon } from '@/components/icons/FavoritesIcon';
import { FavoritesBoldIcon } from '@/components/icons/FavoritesBoldIcon';
import { SaveBoldIcon } from '@/components/icons/SaveBoldIcon';
import Link from "next/link";

interface CardPopularProps {
  recipe: any
}

export function CardPopular({ recipe }: CardPopularProps) {
  interface IconProps {
    name: string;
    active: boolean;
    linear: React.ReactNode;
    bold: React.ReactNode;
  }
  
  const [icons, setIcons] = React.useState<IconProps[]>([
    {
      name: 'like',
      active: false,
      linear: (<FavoritesIcon></FavoritesIcon>),
      bold: (<FavoritesBoldIcon className='text-primary'></FavoritesBoldIcon>)
    },
    {
      name: 'save',
      active: false, 
      linear: (<SaveIcon></SaveIcon>),
      bold: (<SaveBoldIcon className='text-primary'></SaveBoldIcon>)
    },
  ]);

  const handleClick = (index: number) => {
    const updatedIcons = [...icons];
    updatedIcons[index].active = !updatedIcons[index].active;
    setIcons(updatedIcons);
  };

  return (
    <Card className="w-full sm:w-44 md:w-52 xl:w-52 2xl:w-72 h-auto">
      <CardContent className="pl-2 pr-2 pt-2 pb-0">
        <Link
          href={`/home/recipes/${recipe.id}`}
        >
          <Image
            src={recipe.image}
            alt={recipe.id}
            unoptimized
            width={300}
            height={200}
            className='rounded-lg w-full h-auto select-none'
          />
        </Link>
      </CardContent>
      <CardFooter className="flex w-full p-2">
        <div className="flex w-full items-center justify-between text-xs">
          <h3 className="text-md font-bold"> {recipe.title.split(' ')[0]+' '+recipe.title.split(' ')[1]} </h3>
          <span className="opacity-60">&#8226;</span>
          <span className="opacity-60">12 kcal</span>
        </div>
      </CardFooter>
    </Card> 
  );
}
