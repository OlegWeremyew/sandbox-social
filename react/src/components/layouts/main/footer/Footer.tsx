import { FC } from 'react';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer>
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sint.</p>
      <hr />
      <Link to={'/empty/pp'}>PP </Link>
      <Link to={'/empty/tos'}>ToS </Link>
      <Link to={'/empty'}>Survey</Link>
    </footer>
  );
};
