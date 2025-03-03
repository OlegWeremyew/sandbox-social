import { type FC, useCallback } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router-dom';
import { BaseButton } from '@/components';

export const ErrorLayout: FC = () => {
  const navigation: NavigateFunction = useNavigate();

  const handleNavigate = useCallback(() => {
    navigation('/');
  }, [navigation]);

  return (
    <main>
      <h1>PAGE NOT FOUND</h1>
      <BaseButton text={'Go Home'} onClick={handleNavigate} />
    </main>
  );
};
