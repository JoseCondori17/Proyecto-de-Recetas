'use client'
import Link from 'next/link';
import { Separator } from '@radix-ui/react-separator';

import { HomeIcon } from '@/components/icons/HomeIcon';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { RecipesIcon } from '@/components/icons/RecipesIcon';
import { SettingIcon } from '@/components/icons/SettingIcon';
import { ProfileIcon } from '@/components/icons/ProfileIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function SideBar(){

  return (
    <aside className='flex flex-col justify-between'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
        {/* esto no debe ser link, corregir */}
        <Link href={'#'} className='flex h-9 w-9 items-center justify-center'> 
          <ArrowRightIcon></ArrowRightIcon>
        </Link>
        <Separator orientation='horizontal' className='h-[1px] w-6 align-middle bg-border'/>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild> 
              <Link href={'/home'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <HomeIcon></HomeIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Inicio</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'/home/recipes'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <RecipesIcon></RecipesIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Recetas</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'/home/calendar'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <CalendarIcon></CalendarIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Calendario</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'/home/profile'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <ProfileIcon></ProfileIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Perfil</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator orientation='horizontal' className='h-[1px] w-6 align-middle bg-border'/>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'/home/notification'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <NotificationIcon></NotificationIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Notificaciones</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'/home/settings'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <SettingIcon></SettingIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Configuración</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className='flex flex-col items-center px-2'>
        <Link href={'#'} className='flex h-9 w-9 items-center justify-center'> 
          <SettingIcon></SettingIcon>
        </Link>
      </nav>
    </aside>
  )
}