// src/features/events/eventSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action) => {
      const idToDelete = action.payload;
      state.events = state.events.filter((event) => event._id !== idToDelete);
    },
  },
});

export const { addEvent, deleteEvent } = eventSlice.actions;

export default eventSlice.reducer;
