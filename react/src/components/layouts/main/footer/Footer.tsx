import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sint.</p>
      <hr />
      <Link to={'/empty/pp'}>Privacy Policy</Link>
      <Link to={'/empty/tos'}>Terms of Service </Link>
      <Link to={'/empty'}>Survey</Link>
      <p>Copyright Ⓒ {new Date(). getFullYear()}</p>
    </footer>
  );
};
