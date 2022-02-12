import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<string>();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setMode = (mode: string): void => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme
      ? setTheme(localTheme as string)
      : setMode(defaultDark ? 'dark' : 'light');
    setIsMounted(true);
  }, [defaultDark]);

  return { theme, toggleTheme, isMounted };
};
