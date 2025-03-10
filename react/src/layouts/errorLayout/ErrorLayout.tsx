import { type FC, useCallback } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { BaseButton } from '@/components';
import styles from './ErrorLayout.module.scss';

export const ErrorLayout: FC = () => {
  const navigation: NavigateFunction = useNavigate();

  const handleNavigate = useCallback(() => {
    navigation('/');
  }, [navigation]);

  const openHelpWindow = (): void => {
    alert('help');
  };

  return (
    <main className={styles.errorPage}>
      <h1>PAGE NOT FOUND</h1>
      <BaseButton text={'Help'} onClick={openHelpWindow} />
      <BaseButton text={'Go Home'} onClick={handleNavigate} />
    </main>
  );
};
