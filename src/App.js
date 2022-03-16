import React from 'react';
import { useSelector } from 'react-redux';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Routes from './routes';
import GlobalStyles from './assets/styles/Global';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';

const theme = createTheme({
  zIndex: {
    modal: 15,
  },
});

function App() {
  const { currentTheme } = useSelector(state => state.theme);

  return (
    <MaterialThemeProvider theme={theme}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </MaterialThemeProvider>
  );
}

export default App;
