import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem("todos")) || [];
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: data,
  },
  reducers: {
    onAddTodo: (state, action) => {
      state.data.push({
        text: action.payload,
        status: false,
        id: Date.now().toString(),
      });
    },
    onDelete: (state, action) => {
      const newTodos = state.data.filter((item) => item.id !== action.payload);
      state.data = newTodos;
    },
    onStatusChange: (state, action) => {
      const newArr = state.data.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
      state.data = newArr;
    },
    onEdit: (state, action) => {
      const newArr = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.newText };
        }
        return todo;
      });
      state.data = newArr
    }
  },
});


export const todoSliceReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;
