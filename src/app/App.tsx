import { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import type { IDarkTheme, ILightTheme } from '../themes/theme';

import { GlobalStyles } from '../components/globalStyles';

import { colors } from '../lib/colors';

import Header from '../components/header/header.component';

import './App.css';
import HomePage from '../components/home/homepage.component';

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

  const toggleTheme = (): void => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />

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
