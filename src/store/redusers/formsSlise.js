import { createSlice } from "@reduxjs/toolkit";

export const formsSlise = createSlice({
  name: "forms",
  initialState: {
    invoiseAddressIsActive: false,
    bankDataIsActive: false,
    contactIsActive: false,
    id: null,
  },
  reducers: {
    invoiseAddress: (state, action) => {
      state.invoiseAddressIsActive = !state.invoiseAddressIsActive;
      state.id = action.payload;
    },
    bankData: (state, action) => {
      state.bankDataIsActive = !state.bankDataIsActive;
      state.id = action.payload;
    },
    contact: (state, action) => {
      state.contactIsActive = !state.contactIsActive;
      state.id = action.payload;
    },
  },
});

export const { invoiseAddress, bankData, contact } = formsSlise.actions;
export default formsSlise;
