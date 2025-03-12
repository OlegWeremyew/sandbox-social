import { type FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header, SideMenu } from '@/components/layouts';
import type { Nullable } from '@/types';
import style from './MainLayout.module.scss'

export const MainLayout: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (!hash) return;

      const id: string = hash.replace('#', '');
      const element: Nullable<HTMLElement> = document.getElementById(id);

      if (!element) return;

      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });

    }, 0);
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header/>
      <main className={style.main}>
        <SideMenu/>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
