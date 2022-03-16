import { createSlice } from '@reduxjs/toolkit';
import { defaultTheme } from '../../assets/themes/default';

const initialState = { currentTheme: defaultTheme };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
});

export default themeSlice.reducer;
