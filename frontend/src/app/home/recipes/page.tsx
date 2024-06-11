"use client"
import { SaveIcon } from '@/components/icons/SaveIcon'
import { FavoritesIcon } from '@/components/icons/FavoritesIcon'
import { ClockIcon } from '@/components/icons/ClockIcon'
import { FavoritesBoldIcon } from '@/components/icons/FavoritesBoldIcon'
import { SaveBoldIcon } from '@/components/icons/SaveBoldIcon'
import { Input } from '@/components/ui/input'
import { CardGeneral } from '@/components/common/card/card-general/cardGeneral'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardPopular } from '@/components/common/card/card-popular/cardPopular'

export default function Recipes() {
  return (
    <main className='flex flex-col space-y-4 select-none sm:space-y-6 md:space-y-8'>
      <h1 className='text-2xl font-bold sm:text-3xl md:text-4xl'>Recipes</h1>
      <Input className='flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5' />
      <div className='flex-1 flex-col space-y-4'>
        <div className='flex flex-col space-y-2 w-fit'>
          <span className='text-md'>Popular Recipes</span>
          <Carousel className="h-full w-full sm:max-w-sm md:max-w-5xl lg:max-w-5xl xl:max-w-6xl 2xl:min-w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className='-ml-1'>
              {Array.from({ length: 25 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 p-2"
                >
                  <CardPopular />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className='xl:-right-5 2xl:-right-12'/>
          </Carousel>
        </div>
        <div className='flex flex-col space-y-2'>
          <span className='text-md'>All Recipes</span>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 2xl:grid-cols-8'>
            {Array.from({ length: 100 }).map((_, index) => (
              <CardGeneral key={index}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}