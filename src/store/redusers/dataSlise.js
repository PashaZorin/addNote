import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const formsSlise = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataWithInvoise: (state, action) => {
      state.todos.push(action.payload);
    },
    addData: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index] = { ...state.todos[index], ...action.payload.data };
    },
    removeData: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setDataWithInvoise, addData, removeData } = formsSlise.actions;
export default formsSlise;
