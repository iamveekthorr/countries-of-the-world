import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '../hooks/useTheme';

import type { IDarkTheme, ILightTheme } from '../themes/theme';

import { GlobalStyles } from '../components/globalStyles';

import { colors } from '../lib/colors';

import Header from '../components/header/header.component';

import HomePage from '../components/home/homepage.component';

import './App.css';
import Spinner from '../components/spinner/spinner.styles';

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

function App(): ReactElement {
  const { theme, toggleTheme, isMounted } = useDarkMode();
  const mode = theme === 'light' ? lightTheme : darkTheme;

  if (!isMounted) return <Spinner />;
  return (
    <ThemeProvider theme={mode}>
      <>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
