import { ReactElement, useState, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { IDarkTheme, ILightTheme } from '../themes/theme';

import { GlobalStyles } from '../components/globalStyles';

import { colors } from '../lib/colors';

import Header from '../components/header/header.component';

import HomePage from '../components/home/homepage.component';

import './App.css';

function App(): ReactElement {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');

  const darkTheme: IDarkTheme = {
    body: colors.darkModeBG,
    text: colors.darkModeText,
    background: colors.darkModeElements,
  };

  const lightTheme: ILightTheme = {
    body: colors.lightModeBG,
    text: colors.lightModeText,
    background: colors.darkModeText,
  };

  const toggleTheme = useCallback(() => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }, [theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;