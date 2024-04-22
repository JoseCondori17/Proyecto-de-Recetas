"use client"

import Image from "next/image"
import { Icon } from "@iconify/react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Recipes() {
  return (
    <Card className="w-52 h-48">
      <CardContent>
        <div className="p-2">
          <img src="/img/food.jpg" alt="asd" className="rounded-lg w-full"/>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h3 className="text-md font-medium"> Rice Wiee </h3>
            <div className="flex text-xs opacity-75 space-x-1">
              <div className="flex justify-center items-center space-x-1">
                <Icon icon="solar:clock-circle-outline" />
                <span>15 min</span>
              </div>
              <span>&#8226;</span>
              <span>12 kcal</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-60">
            <Icon icon="solar:heart-linear" width={17} height={17}/>
            <Icon icon="solar:bookmark-outline" width={17} height={17}/>
          </div>
        </div>
      </CardFooter>
    </Card> 
  )
}