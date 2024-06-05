"use client"

import React from 'react'
import { Icon } from "@iconify/react"
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


interface IconProps {
  name: string
  active: boolean
  linear: React.ReactNode
  bold: React.ReactNode
}

export function CardRecipe() {

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
    <Card className="w-full h-full">
      <CardContent className="p-2">
        <Image
          src={'/img/food.jpg'} 
          alt='image' 
          width={550}
          height={367}
          className='rounded-lg w-full select-none'
        />
      </CardContent>
      <CardFooter className="pl-2 pr-2 pb-2">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-md font-medium"> Rice Wiee </h3>
            <div className="flex max-sm:hidden text-xs opacity-75 space-x-1 select-none">
              <div className="flex justify-center items-center space-x-1">
                <ClockIcon></ClockIcon>
                <span>15 min</span>
              </div>
              <span>&#8226;</span>
              <span>12 kcal</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            {
              icons.map((key, idx) => (
                <button key={idx} onClick={() => handleClick(idx)}>
                  {
                    key.active ? key.bold : key.linear
                  }
                </button>
              ))
            }
          </div>
        </div>
      </CardFooter>
    </Card> 
  )
}