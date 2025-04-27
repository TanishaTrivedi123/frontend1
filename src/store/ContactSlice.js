import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: [], // 👈 Ab array hai
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactData: (state, action) => {
      state.contactData.push(action.payload);
      // 👆 naye data ko array me push kar rahe hai
    },
  },
});

export const { addContactData } = ContactSlice.actions;

export default ContactSlice.reducer;
