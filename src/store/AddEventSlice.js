// src/store/AddEventSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  upcomingEvent: {
    title: "",
    description: "",
  },
};

const AddUpcomingSlice = createSlice({
  name: "upcomingEvent",
  initialState,
  reducers: {
    setUpcomingEvent: (state, action) => {
      state.upcomingEvent = action.payload;
    },
    deleteUpcomingEvent: (state) => {
      state.upcomingEvent.title = "";
      state.upcomingEvent.description = "";
    },
  },
});

export const { setUpcomingEvent, deleteUpcomingEvent } =
  AddUpcomingSlice.actions;

export default AddUpcomingSlice.reducer;
