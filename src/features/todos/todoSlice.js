import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const respons = await axios.get("http://localhost:3001/todos/");
      return respons.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/todos/", {
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const toggleCompleteAsync = createAsyncThunk(
  "todos/toggleCompleteAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/todos/${payload.id}`,
        {
          completed: payload.completed,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todos: [
      // { id: 1, title: "todo 1", completed: false },
      // { id: 2, title: "todo 2", completed: false },
    ],
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
  },
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, loading: true, todos: [] };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        todos: [],
        error: action.error.message,
      };
    },
    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },
    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.completed = action.payload.completed;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
