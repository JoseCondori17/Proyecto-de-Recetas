'use client'
import Calendar from '@/app/home/calendar/page';
import Profile from '@/app/home/profile/page';
import Recipes from '@/app/home/recipes/page';
import Settings from '@/app/home/settings/page';
import Notification from '@/app/home/notification/page';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function MainContent(){
  const pathname = usePathname();
  const content = useMemo(() => {
    switch (pathname) {
      case '/home/recipes':
        return <Recipes />;
      case '/home/calendar':
        return <Calendar />;
      case '/home/profile':
        return <Profile />;
      case '/home/notification':
        return <Notification />;
      case '/home/settings':
        return <Settings />;
      default:
        return <p>Not Found</p>;
    }
  }, [pathname]);

  return (
    { content }
  )
}