import { ReactElement, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import type { IDarkTheme, ILightTheme } from './themes/theme';

import { GlobalStyles } from './components/globalStyles';

import './App.css';

function App(): ReactElement {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState(defaultDark ? 'dark' : 'light');

  const darkTheme: IDarkTheme = {
    body: '#000',
    text: '#fff',
    background: '#000',
  };

  const lightTheme: ILightTheme = {
    body: '#fff',
    text: '#000',
    background: '#fff',
  };

  const toggleTheme = (): void => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : lightTheme}>
      <>
        <GlobalStyles />
        <div> hello world</div>
        <button onClick={toggleTheme} type="button">
          testing toggling
        </button>
      </>
    </ThemeProvider>
  );
}

export default App;
