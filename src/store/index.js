import { configureStore } from "@reduxjs/toolkit";
import formsSlise from "./redusers/formsSlise";
import dataSlise from "./redusers/dataSlise";
const store = configureStore({
  reducer: {
    forms: formsSlise.reducer,
    data: dataSlise.reducer,
  },
});

export default store;
