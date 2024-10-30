import { createSlice } from "@reduxjs/toolkit";

const initialstate = JSON.parse(localStorage.getItem("todos")) || [];

const todoSlice = createSlice({
  name: "todos",
  initialSlice,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const updatedState = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
