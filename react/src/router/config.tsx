import { App } from '@/App';
import { ErrorLayout, AuthLayout, MainLayout } from '@/layouts';

export const routes = [
  {
    element: <App />,
    children: [
      {
        path: '*',
        element: <ErrorLayout />,
      },
      {
        path: '*',
        element: <ErrorLayout />,
      },
      {
        path: 'login',
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <div>AuthLayout</div>,
          },
        ],
      },
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <div>MainLayout</div>,
          },
        ],
      },
    ],
  },
];
