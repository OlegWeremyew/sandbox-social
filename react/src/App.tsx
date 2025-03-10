import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTheme } from '@/hooks';
import { Theme } from '@/types';
import { useEffect } from 'react';

export const App = () => {

  const { theme } = useTheme();

  useEffect(() => {
    if (Theme.LIGHT === theme) {
      window.document.body.classList.add('light');
      return;
    }

    window.document.body.classList.remove('light');
  }, [theme]);

  return (
    <>
      <Outlet />
      <ToastContainer closeButton={<button>test</button>} icon={false} position="top-right" />
    </>

  );
};
