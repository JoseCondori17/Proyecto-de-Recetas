'use client'
import Link from "next/link";
import { ItemProps } from "@/interfaces/props";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

export function ItemSideBar({ href, name, icon: Icon, isOpen }: ItemProps){
  const pathName = usePathname();
  const isActive = pathName.includes(href) || pathName===href; /* === */

  return (
    <li>
      <Link href={href} className={clsx(
        'flex font-light p-2.5 rounded-md transition-colors duration-200',
        isActive ? 'bg-primary text-white' : 'hover:bg-gray-200',
        isOpen ? 'justify-between' : 'justify-center'
      )}>
        <div className={'flex justify-center items-center gap-4'}>
          <Icon className={clsx('size-5', isActive ? 'text-white' : 'hover:bg-gray-200 opacity-70')}/> {/* solucionar el tamño que ocupa el icono*/}
          {isOpen && (
            <span className={'hidden lg:inline-block text-sm'}>{name}</span>
          )}
        </div>
      </Link>
    </li>
  );
}