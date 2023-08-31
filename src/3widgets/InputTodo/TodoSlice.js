import { createSlice } from "@reduxjs/toolkit";
import { delSpace } from "../../5shared/helpers/delSpace";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todoArr: JSON.parse(localStorage.getItem("todoList"))
      ? JSON.parse(localStorage.getItem("todoList"))
      : [],
  },
  reducers: {
    add: (state, action) => {
      state.todoArr.push({
        text: action.payload.text,
        id: delSpace(action.payload.text),
        status: true,
      });
    },
    toggleStatus: (state, action) => {
      const toggleTodo = state.todoArr.filter((item) => {
        return item.id === action.payload.item.id;
      });
      console.log(toggleTodo);
      toggleTodo[0].status = !toggleTodo[0].status;
      console.log("toggle");
    },

    deleteTodo: (state, action) => {
      state.todoArr = state.todoArr.filter((item) => {
        return item.id !== action.payload.item.id;
      });
    },
  },
});
export const { add, toggleStatus, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
