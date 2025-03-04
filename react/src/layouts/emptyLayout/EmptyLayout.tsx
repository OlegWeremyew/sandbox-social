import { type FC } from 'react';
import { Outlet } from 'react-router-dom';

export const EmptyLayout: FC = () => {

  return (
    <>
      EmptyLayout
      <Outlet />
    </>
  );
};
