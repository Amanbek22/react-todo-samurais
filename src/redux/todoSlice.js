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
  },
});

export const todoSliceReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions;
