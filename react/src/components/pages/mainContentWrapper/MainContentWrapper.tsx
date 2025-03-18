import { type FC, type PropsWithChildren } from 'react';
import styles from './MainContentWrapper.module.scss';

interface MainContentWrapperProp extends PropsWithChildren {
  title?: string;
}

export const MainContentWrapper: FC<MainContentWrapperProp> = ({ children, title = '' }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
