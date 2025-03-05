import { FC } from 'react';
import styles from './Header.module.scss';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Header: FC = () => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  const handleLogoClick = (): void => {
    if (pathname === '/') {
      scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    navigation('/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.logo} onClick={handleLogoClick}>logo</div>
        <div className={styles.userNav}>
          <NavLink className={styles.link} to="/user/testId/schedule">schedule</NavLink>
          <NavLink className={styles.link} to="/user/testId/settings">avatar</NavLink>
          <NavLink className={styles.link} to="/login">login</NavLink>
        </div>
      </div>
      <hr />
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/news">news</NavLink>
        <NavLink className={styles.link} to="/posts">posts</NavLink>
        <NavLink className={styles.link} to="/users">users</NavLink>
        <NavLink className={styles.link} to="/music">music</NavLink>
        <NavLink className={styles.link} to="/video">video</NavLink>
        <NavLink className={styles.link} to="/map">map</NavLink>
        <NavLink className={styles.link} to="/weather">weather</NavLink>
        <NavLink className={styles.link} to="/shop">shop</NavLink>
        <NavLink className={styles.link} to="/stock-exchange">stock-exchange</NavLink>
      </nav>
    </header>
  );
};
