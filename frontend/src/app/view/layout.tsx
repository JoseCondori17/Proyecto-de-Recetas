'use client'
import {SessionProvider} from "next-auth/react";
import { SideBar } from "@/layouts/nav/sidebar/sidebar";
import {Separator} from "@/components/ui/separator";

export default function ViewLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <SessionProvider>
    <div className={'flex flex-col lg:flex-row min-h-screen bg-white'}> {/* min-h-screen*/}
      <SideBar></SideBar>
      <Separator className={'h-auto'} orientation={'vertical'}></Separator>
      <div className={'flex-1'}>
        <Separator className={'w-full'}></Separator>
        <main className={'flex flex-1 justify-center m-4'}>
          {children}
        </main>
      </div>
    </div>
    </SessionProvider>
  );
}