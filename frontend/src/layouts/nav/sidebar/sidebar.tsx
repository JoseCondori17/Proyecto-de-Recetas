'use client'
import { useState } from "react";
import { clsx } from "clsx";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ItemSideBar } from "@/layouts/nav/sidebar/item";

import {
  Calendar01Icon,
  Notification01Icon,
  LayoutLeftIcon,
  LayoutRightIcon,
  Settings02Icon,
  Home02Icon,
  UserCircleIcon,
  DiscoverCircleIcon
} from "hugeicons-react";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => { setIsOpen(!isOpen); };

  return (
    <aside className={clsx('flex w-full shrink-0 select-none transition-all duration-500 ease-out',
      isOpen ? 'lg:w-64' : 'lg:w-14'
    )}>
      <nav className={'text-sm box-border w-full'}>
        <div className={clsx('hidden lg:flex lg:items-center lg:mt-2 lg:h-8',
          isOpen ? 'justify-end' : 'justify-center'
        )}>
          <Button variant={'ghost'} onClick={toggleSidebar}>
            {
              isOpen ? <LayoutRightIcon size={19}></LayoutRightIcon> : <LayoutLeftIcon size={19}></LayoutLeftIcon>
            }
          </Button>
        </div>

        <Separator className={'hidden lg:mb-4 lg:mt-2'}></Separator>

        <ul className={'my-2 ml-2 mr-2 flex flex-row justify-between lg:flex-col lg:gap-4'}>
          <ItemSideBar href={'/view/community'} name={'Community'} icon={Home02Icon} isOpen={isOpen}></ItemSideBar>
          <ItemSideBar href={'/view/explore'} name={'Explore'} icon={DiscoverCircleIcon} isOpen={isOpen}></ItemSideBar>
          <ItemSideBar href={'/view/calendar'} name={'Calendar'} icon={Calendar01Icon} isOpen={isOpen}></ItemSideBar>
          <ItemSideBar href={'/view/profile/1'} name={'Profile'} icon={UserCircleIcon} isOpen={isOpen}></ItemSideBar> {/*verifcar el params*/}
          {/*<ItemSideBar href={'/view/notification'} name={'Notifications'} icon={Notification01Icon} isOpen={isOpen}></ItemSideBar>*/}
          <ItemSideBar href={'/view/setting'} name={'Setting'} icon={Settings02Icon} isOpen={isOpen}></ItemSideBar>
        </ul>
      </nav>
    </aside>
  );
}