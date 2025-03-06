import { type FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const EmptyLayout: FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <header>
        <button onClick={()=>navigate(-1)}>go back</button>
      </header>
      EmptyLayout
      <Outlet />
    </>
  );
};
