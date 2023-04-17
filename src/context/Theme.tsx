import { createContext, useContext, useEffect, useState } from 'react';

enum ITheme {
  dark = 'dark',
  light = 'light',
}

const getInitialTheme = (): ITheme => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');

    if (typeof storedPrefs === 'string') {
      return storedPrefs as ITheme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark' as ITheme;
    }
  }

  return 'light' as ITheme; // light theme as the default;
};

interface ProviderInterface {
  theme: ITheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ProviderInterface | null>(null);

const ThemeProvider = ({ children }: any): any => {
  const [theme, setTheme] = useState<ITheme>(getInitialTheme);

  const rawSetTheme = (rawTheme: ITheme) => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  const toggleTheme = () => {
    const _theme: ITheme = theme === 'dark' ? ('light' as ITheme) : ('dark' as ITheme);
    setTheme(_theme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
