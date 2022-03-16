import { createSlice } from '@reduxjs/toolkit';

/** Themes */
import { defaultTheme } from '../../assets/themes/default';
import { darkTheme } from '../../assets/themes/dark';

const initialState = { theme: 'default', currentTheme: defaultTheme, darkMode: false };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      if (!state.darkMode) {
        state.currentTheme = darkTheme;
        state.darkMode = true;
        state.theme = 'dark';
      } else {
        state.currentTheme = defaultTheme;
        state.darkMode = false;
        state.theme = 'default';
      }
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
