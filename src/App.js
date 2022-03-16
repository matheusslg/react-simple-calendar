import React from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import { defaultTheme } from './assets/themes/default';
import GlobalStyles from './assets/styles/Global';
import Routes from './routes';

/**
 * Material UI needs this to work properly
 */
const theme = createTheme({
  zIndex: {
    modal: 15,
  },
});

function App() {
  const { currentTheme } = useSelector(state => state.theme);

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={Object.assign({}, defaultTheme, currentTheme)}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
