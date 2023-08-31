import { configureStore, combineReducers } from "@reduxjs/toolkit";
import TodoReducer from "../../3widgets/InputTodo/TodoSlice";
import ProductReducer from "../../3widgets/InputProducts/ProductSlice";

const rootReducer = combineReducers({
  todoArr: TodoReducer,
  productArr: ProductReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
