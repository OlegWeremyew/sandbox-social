import { useContext } from 'react';
import { ThemeContext } from '@/providers';
import { Theme } from '@/types';
import { LOCAL_STORAGE_THEME_KEY } from '@/constants';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme?.(newTheme!);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme!,
    toggleTheme,
  }
}
