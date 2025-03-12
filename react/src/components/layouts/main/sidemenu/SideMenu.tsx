import { FC, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import img from '@/assets/images/header/sun.png';

export const SideMenu: FC = () => {
  const { id } = useParams<{ id: string }>()
  const basePath = `user/${id}`;

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleSideMenu = ():void => {
    setIsOpen(prev => !prev)
  }
  return (
    <aside className={styles.sideMenu} style={{ width: `${isOpen ? 50 : 150}px` }}>
      <button type="button" onClick={toggleSideMenu}>mode</button>
      <nav>
        <NavLink className={styles.sideMenuLink} to={`${basePath}`}>
          <img className={styles.linkIcon} src={img} alt="Profile icon" />
          Profile
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/friends`}>
          <img className={styles.linkIcon} src={img} alt="Friends icon" />
          Friends
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/messages`}>
          <img className={styles.linkIcon} src={img} alt="Messages icon" />
          Messages
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/music`}>
          <img className={styles.linkIcon} src={img} alt="Music icon" />
          Music
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/video`}>
          <img className={styles.linkIcon} src={img} alt="Video icon" />
          Video
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/schedule`}>
          <img className={styles.linkIcon} src={img} alt="Schedule icon" />
          Schedule
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/settings`}>
          <img className={styles.linkIcon} src={img} alt="Settings icon" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};
