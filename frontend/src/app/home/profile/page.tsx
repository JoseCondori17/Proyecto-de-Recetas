'use client'
import { MapIcon } from "@/components/icons/MapIcon"
import { Button } from "@/components/ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Avatar, Tabs, Tab } from "@nextui-org/react";
import Image from "next/image"

import { VideoIcon } from "@/components/icons/VideoIcon";
import { FavoritesIcon } from "@/components/icons/FavoritesIcon";
import { SaveIcon } from "@/components/icons/SaveIcon";
import { CardRecipe } from "@/components/recipes/CardRecipe";


export default function Profile(){
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full space-y-12">
        <div className="w-2/4 max-sm:w-full max-md:w-full max-lg:w-full space-y-6 max-sm:space-y-3">
          <Image
              src={'/img/profile-back.png'}
              alt="profile-back"
              width={1000}
              height={750}
              className="w-full h-64"
              priority
          />
          <div className="flex flex-col justify-between space-y-8 w-full pl-6 pr-6">
            <div className="flex flex-wrap justify-between">
              <div className="flex max-sm:w-full space-x-6 h-16">
                <Avatar
                  showFallback 
                  isBordered 
                  src="https://i.pravatar.cc/150?u=a04258114e29026708c" 
                  className="h-36 w-36 bottom-20 max-sm:h-32 max-sm:w-32"
                />
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    <h1 className="text-2xl font-medium">Juan Alvaro</h1>
                    <span className="text-lg opacity-55">@juandjs</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapIcon className="opacity-40"></MapIcon>
                    <span className='text-xs opacity-40'>Lima, Peru</span>
                  </div>
                </div>
              </div>
              <div className="space-x-2">
                <Button className='rounded-3xl pl-6 pr-6 hover:bg-primary'>Follow</Button>
                <Button className='rounded-3xl pl-6 pr-6' variant="outline">Share</Button>
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-4 pl-3 pr-3">
              <div className="opacity-50">
                <p>I had a great weekend. On Friday afternoon, I finished work at 5 PM. I went home and took a shower. Then I went to see a couple of my friends at a bar downtown.</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">245</span>
                  <span className="text-sm opacity-65">Recipes</span>
                </div>
                <Separator className="h-8 w-[1px] bg-border" orientation="vertical"/>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">80</span>
                  <span className="text-sm opacity-65">Followers</span>
                </div>
                <Separator className="h-8 w-[1px] bg-border" orientation="vertical"/>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">265</span>
                  <span className="text-sm opacity-65">Following</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-2/4 max-sm:w-full max-md:w-full max-lg:w-full flex-col pl-3 pr-3">
          <Tabs 
            aria-label="Options"
            variant="underlined"
            size="lg"
            classNames={{
              tabList: 'w-full gap-36 max-sm:gap-16 max-md:gap-36 max-lg:gap-56 m-2',
              cursor: "w-full bg-red-400",
              tab: 'px-6 h-10 text-red-500',
              tabContent: 'group-data-[selected=true]:text-red-500'
            }}
            className="w-full"
          >
            <Tab 
              key="video" 
              title={
                <VideoIcon className="w-5 h-5"></VideoIcon>
              }
            >
              <div className="grid grid-cols-3 gap-4">
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
              </div>
            </Tab>
            <Tab 
              key="favorites" 
              title={
                <FavoritesIcon className="w-5 h-5"></FavoritesIcon>
              }
            >
              <div className="grid grid-cols-3 gap-4">
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
              </div>
            </Tab>
            <Tab 
              key="save" 
              title={
                <SaveIcon className="w-5 h-5"></SaveIcon>
              }
            >
              <div className="grid grid-cols-3 gap-4">
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
                <CardRecipe></CardRecipe>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}