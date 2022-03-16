import { configureStore } from '@reduxjs/toolkit';

/** Reducers */
import themeReducer from './reducers/theme';
import calendarReducer from './reducers/calendar';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    calendar: calendarReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
