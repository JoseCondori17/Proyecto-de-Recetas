import { SideBar } from '@/containers/SideBar';
import { Separator } from "@/components/ui/separator"

export default function ManagementLayout({ 
  children,
 }: Readonly<{
  children: React.ReactNode
}>){  
  return (
    <div className="flex h-screen">
      <SideBar/>
      <Separator className="w-[1px] bg-neutral-200" orientation="vertical"></Separator>
      <div className="flex-1 m-5">
        {/* <HeaderNav name={'Eduardo Condori'} role={'Administrator'}></HeaderNav> */}
        {/* <Separator className="bg-neutral-200 h-[1px]"></Separator> */}
        {children}
      </div>
    </div>
  )
}