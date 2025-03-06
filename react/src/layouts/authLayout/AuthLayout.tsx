import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const AuthLayout: FC = () => (
  <main>
    <Link to={'/login/'}>sign-in</Link>
    <Link to={'/login/sign-up'}>sign-up</Link>
    <Link to={'/login/password-recovery'}>password-recovery</Link>
    <Link to={'/login/sms-confirmation'}>sms-confirmation</Link>
    <Link to={'/login/confirm-email'}>confirm-email</Link>
    <Outlet />
  </main>
);
