import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './assets/styles/index.scss';
import { router } from '@/router/router';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
