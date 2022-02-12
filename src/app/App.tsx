import { lazy, ReactElement, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import './App.css';

import type { IDarkTheme, ILightTheme } from '../themes/theme';

import { useDarkMode } from '../hooks/useTheme';
import { useCountries } from '../hooks/useFetcher';

import { GlobalStyles } from '../components/globalStyles';

import { colors } from '../lib/colors';

import Header from '../components/header/header.component';
import Spinner from '../components/spinner/spinner.styles';

const CountryPage = lazy(() => import('../pages/country/country.page'));
const HomePage = lazy(() => import('../pages/home/homepage.page'));

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

  const { countries, isLoading, isError } = useCountries(
    'https://restcountries.com/v3.1/all'
  );

  if (!isMounted) return <div>loading...</div>;
  return (
    <ThemeProvider theme={mode}>
      <>
        <Header toggleTheme={toggleTheme} />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <HomePage
                  countries={countries}
                  isError={isError}
                  isLoading={isLoading}
                />
              </Suspense>
            }
          />

          <Route
            path="/country/:name"
            element={
              <Suspense fallback={<Spinner />}>
                <CountryPage />
              </Suspense>
            }
          />
        </Routes>
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}

export default App;
