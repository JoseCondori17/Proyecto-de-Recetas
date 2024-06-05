'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from '@radix-ui/react-separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HomeIcon } from '@/components/icons/HomeIcon';
import { CalendarIcon } from '@/components/icons/CalendarIcon';
import { RecipesIcon } from '@/components/icons/RecipesIcon';
import { SettingIcon } from '@/components/icons/SettingIcon';
import { ProfileIcon } from '@/components/icons/ProfileIcon';
import { NotificationIcon } from '@/components/icons/NotificationIcon';
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon';

export function SideBar(){
  const pathname = usePathname();
  const menuItems = [
    { href: '/home', label: 'Inicio', icon: <HomeIcon/> },
    { href: '/home/recipes', label: 'Recetas', icon: <RecipesIcon/> },
    { href: '/home/calendar', label: 'Calendario', icon: <CalendarIcon/> },
    { href: '/home/profile', label: 'Perfil', icon: <ProfileIcon/> },
    { href: '/home/notification', label: 'Notificaciones', icon: <NotificationIcon/> },
    { href: '/home/settings', label: 'Configuración', icon: <SettingIcon/> },
  ]

  return (
    <aside className='flex flex-col justify-between'>
      <nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
        {/* Esto no debe ser un enlace, corregir */}
        <Link href={'#'} className='flex h-9 w-9 items-center justify-center'> 
          <ArrowRightIcon />
        </Link>
        <Separator orientation='horizontal' className='h-[1px] w-6 align-middle bg-border'/>
        <ul className='space-y-3 flex flex-col justify-center'>
          {menuItems.map((item, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100} >
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={item.href} className={`flex h-9 w-9 items-center justify-center rounded-lg hover:bg-primary/40 transition-colors ${pathname === item.href ? 'bg-primary/40' : ''}`}>
                      {item.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side='right'>{item.label}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {index === 3 && <Separator orientation='horizontal' className='h-[1px] w-6 align-middle bg-border ml-1.5 mt-2'/>}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
