import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: [], // Initial empty array
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactData: (state, action) => {
      state.contactData = [...state.contactData, action.payload]; // Ensure we add new data without replacing old data
    },
  },
});

export const { addContactData } = ContactSlice.actions;

export default ContactSlice.reducer;
