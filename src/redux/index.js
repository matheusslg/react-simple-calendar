import { configureStore } from '@reduxjs/toolkit';

/** Reducers */
import calendarReducer from './reducers/calendar';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
