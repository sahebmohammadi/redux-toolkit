import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "todo 2", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const selectedTodo = state.find((todo) => todo.id === action.payload.id);
      selectedTodo.completed = !selectedTodo.completed;
    },
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
