import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import todoSliceReducer from "./todos/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoSliceReducer,
  },
});
