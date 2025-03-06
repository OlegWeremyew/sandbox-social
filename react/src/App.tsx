import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const App = () => (
  <>
    <Outlet />
    <ToastContainer closeButton={<button>test</button>} icon={false} position="top-right" />
  </>
);
