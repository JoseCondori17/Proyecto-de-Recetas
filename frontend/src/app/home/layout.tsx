import { MainContent } from '@/components/containers/MainContent';
import { SideBar } from '@/components/containers/SideBar';
import React from 'react';

const Layout = ({ children} : Readonly<{children:React.ReactNode}>) => {
  return (
    <>
      <SideBar/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout;
