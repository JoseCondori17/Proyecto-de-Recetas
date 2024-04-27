"use client"

import React from 'react'
import { Icon } from "@iconify/react"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"


interface IconProps {
  name: string
  active: boolean
  linear: React.ReactNode
  bold: React.ReactNode
}

export default function Recipes() {

  const [icons, setIcons] = React.useState<IconProps[]>([
    {
      name: 'like',
      active: false,
      linear: (<Icon icon="solar:heart-linear" width={17} height={17}/>),
      bold: (<Icon icon="solar:heart-bold" className='text-primary' width={17} height={17}/>)
    },
    {
      name: 'save',
      active: false, 
      linear: (<Icon icon="solar:bookmark-outline" width={17} height={17}/>),
      bold: (<Icon icon="solar:bookmark-bold" className='text-primary' width={17} height={17}/>)
    },
  ]);

  const handleClick = (index: number) => {
    const updatedIcons = [...icons];
    updatedIcons[index].active = !updatedIcons[index].active;
    setIcons(updatedIcons);
  };

  return (
    <Card className="w-52 h-48">
      <CardContent className="p-2">
        <div>
          <img src="/img/food.jpg" alt="asd" className="rounded-lg w-full select-none"/> {/* mejorar la carga de imagen */}
        </div>
      </CardContent>
      <CardFooter className="pl-2 pr-2">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-md font-medium"> Rice Wiee </h3>
            <div className="flex text-xs opacity-75 space-x-1 select-none">
              <div className="flex justify-center items-center space-x-1">
                <Icon icon="solar:clock-circle-outline" />
                <span>15 min</span>
              </div>
              <span>&#8226;</span>
              <span>12 kcal</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            {
              icons.map((key, idx) => (
                <button id='idx' onClick={() => handleClick(idx)}>
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