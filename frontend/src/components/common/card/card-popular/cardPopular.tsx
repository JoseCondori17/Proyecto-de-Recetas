import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'
import { SaveIcon } from '@/components/icons/SaveIcon'
import { FavoritesIcon } from '@/components/icons/FavoritesIcon'
import { ClockIcon } from '@/components/icons/ClockIcon'
import { FavoritesBoldIcon } from '@/components/icons/FavoritesBoldIcon'
import { SaveBoldIcon } from '@/components/icons/SaveBoldIcon'
import React from 'react'

export function CardPopular(){
  interface IconProps {
    name: string
    active: boolean
    linear: React.ReactNode
    bold: React.ReactNode
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
  <Card className="w-44 h-48">
    <CardContent className="pl-2 pr-2 pt-2 pb-0">
      <Image
        src={'/img/food.jpg'} 
        alt='image' 
        width={550}
        height={367}
        className='rounded-lg w-full h-36 select-none'
      />
    </CardContent>
    <CardFooter className="flex w-full p-2">
      <div className="flex w-full items-center justify-between text-xs">
        <h3 className="text-md font-bold"> Rice Wiee </h3>
        <span className="opacity-60">&#8226;</span>
        <span className="opacity-60">12 kcal</span>
      </div>
    </CardFooter>
  </Card> 
  )
}