import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/constants';
import { Theme } from '@/types';
import { ThemeContext } from '@/providers';

const STORE_THEME = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | undefined;
const DEFAULT_THEME = STORE_THEME || (window.matchMedia('(prefers-color-scheme: light)').matches ? Theme.LIGHT : Theme.DARK);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
