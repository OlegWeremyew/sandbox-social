import { FC, useMemo, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './SideMenu.module.scss';
import { useTheme } from '@/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faCog,
  faEnvelope,
  faHouse,
  faMusic,
  faUserFriends,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@/types';

export const SideMenu: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const basePath = useMemo(() => `user/${id ?? 10}`, [id]);

  // Вычисляем цвет иконок при смене темы
  const iconsColor = useMemo(() => (theme === Theme.DARK ? 'white' : 'black'), [theme]);

  const toggleSideMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside className={styles.sideMenu} style={{ width: `${isOpen ? 50 : 165}px` }}>
      <button type="button" onClick={toggleSideMenu}>
        mode
      </button>
      <nav>
        <NavLink className={styles.sideMenuLink} to={`${basePath}`} end>
          <FontAwesomeIcon className={styles.linkIcon} icon={faHouse} color={iconsColor} />
          Profile
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/friends`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faUserFriends} color={iconsColor} />
          Friends
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/messages`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faEnvelope} color={iconsColor} />
          Messages
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/music`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faMusic} color={iconsColor} />
          Music
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/video`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faVideo} color={iconsColor} />
          Video
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/schedule`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faCalendarDays} color={iconsColor} />
          Schedule
        </NavLink>
        <NavLink className={styles.sideMenuLink} to={`${basePath}/settings`}>
          <FontAwesomeIcon className={styles.linkIcon} icon={faCog} color={iconsColor} />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};
