import { createSlice, nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = { monthIndex: dayjs().month(), events: [], selectedEvent: {} };

const sortEventsByDateTime = events => {
  return events.sort((a, b) => {
    return new Date(a.dateTime) - new Date(b.dateTime);
  });
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthIndex(state, action) {
      state.monthIndex = action.payload;
    },
    setSelectedEvent(state, action) {
      state.selectedEvent = state.events.find(event => event.id === action.payload);
    },
    resetSelectedEvent(state) {
      state.selectedEvent = {};
    },
    addNewEvent(state, action) {
      const newEvent = {
        id: nanoid(),
        name: action.payload.name,
        dateTime: action.payload.dateTime,
        labelColor: action.payload.labelColor,
      };
      state.events = sortEventsByDateTime([...state.events, newEvent]);
      state.selectedEvent = newEvent;
    },
    updateEvent(state, action) {
      state.events = sortEventsByDateTime(
        state.events.map(event => {
          if (event.id === action.payload.id) {
            return {
              id: event.id,
              name: action.payload.name || event.name,
              dateTime: action.payload.dateTime || event.dateTime,
              labelColor: action.payload.labelColor || event.labelColor,
            };
          }

          return event;
        })
      );
    },
    deleteEvent(state, action) {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
  },
});

export const { setMonthIndex, setSelectedEvent, resetSelectedEvent, addNewEvent, updateEvent, deleteEvent } = calendarSlice.actions;

export default calendarSlice.reducer;
