import { type FC, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import type { Nullable } from '@/types';

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
      <header>header</header>
      <main>
        <h1>MainLayout</h1>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
