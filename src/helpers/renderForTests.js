import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Context as ResponsiveContext } from 'react-responsive';
import { createTheme } from '@mui/material';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '../assets/themes/default';
import { store } from '../redux';

const theme = createTheme({
  zIndex: {
    modal: 15,
  },
});

const RenderForTests = (component, screenWidth = 1920) => {
  return render(
    <Provider store={store}>
      <MaterialThemeProvider theme={theme}>
        <ThemeProvider theme={defaultTheme}>
          <ResponsiveContext.Provider value={{ width: screenWidth }}>{component}</ResponsiveContext.Provider>
        </ThemeProvider>
      </MaterialThemeProvider>
    </Provider>
  );
};

export default RenderForTests;
