"use client"
import React from 'react';
import Link from 'next/link';
import { HomeIcon } from '@/components/icons/HomeIcon';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { RecipesIcon } from '@/components/icons/RecipesIcon';
import { SettingIcon } from '@/components/icons/SettingIcon';
import { ProfileIcon } from '@/components/icons/ProfileIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
/* import { ArrowLeft } from '@/components/icons/ArrowLeft'; */
import { ArrowRight } from '@/components/icons/ArrowRight';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function Home() {
  return (
    <aside className='flex flex-col justify-between'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
        <Link href={'#'}> 
          <ArrowRight></ArrowRight>
        </Link>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <HomeIcon></HomeIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Inicio</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <RecipesIcon></RecipesIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Recetas</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <CalendarIcon></CalendarIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Calendario</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <ProfileIcon></ProfileIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Perfil</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
                <NotificationIcon></NotificationIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>Notificaciones</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider delayDuration={100}>
          <Tooltip >
            <TooltipTrigger> 
              <Link href={'#'} className='flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary-opacity transition-colors'>
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