"use client"
import { SaveIcon } from '@/components/icons/SaveIcon'
import { FavoritesIcon } from '@/components/icons/FavoritesIcon'
import { ClockIcon } from '@/components/icons/ClockIcon'
import { FavoritesBoldIcon } from '@/components/icons/FavoritesBoldIcon'
import { SaveBoldIcon } from '@/components/icons/SaveBoldIcon'
import { Input } from '@/components/ui/input'
import { CardGeneral } from '@/components/common/card/card-general/cardGeneral'

export default function Recipes() {

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-2xl font-bold'>Recipes</h1>
      <Input className='flex w-1/5'/>
      <div className='flex-1 flex-col space-y-4'>
        <div className='flex'>
          <span className='text-md'>Popular Recipes</span>
        </div>
        <div className='flex-1'>
          <span className='text-md'>All Recipes</span>
          <div className='flex flex-wrap gap-4'>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
            <CardGeneral/>
          </div>
        </div>
      </div>
    </div>
  )
}