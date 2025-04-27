import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactData: {
    name: "",
    email: "",
    message: "",
  },
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactData: (state, action) => {
      state.contactData = action.payload;
    },
  },
});

export const { addContactData } = ContactSlice.actions;

export default ContactSlice.reducer;
