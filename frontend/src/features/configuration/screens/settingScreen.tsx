'use client'
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";

export function SettingScreen(){
  return (
    <div>
      <Button variant={'destructive'} onClick={() => signOut({ callbackUrl: '/', redirect:true })}>Logout</Button>
    </div>
  );
}