import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import { router } from '@/router/router';
import { store } from '@/store/store';
import { ThemeProvider } from '@/providers';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
