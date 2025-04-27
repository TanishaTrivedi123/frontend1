const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContactData: (state, action) => {
      if (!Array.isArray(state.contactData)) {
        state.contactData = []; // Reset to an empty array if it's not an array
      }
      state.contactData = state.contactData.concat(action.payload); // Use concat to avoid mutation
    },
  },
});

export const { addContactData } = ContactSlice.actions;

export default ContactSlice.reducer;
