import { type FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, SideMenu } from '@/components/layouts';
import style from './MainLayout.module.scss';

export const MainLayout: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    const element = document.getElementById(id);

    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className={style.main}>
        <SideMenu />
        <Outlet />
      </main>
    </>
  );
};
