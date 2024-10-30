import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todo/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
