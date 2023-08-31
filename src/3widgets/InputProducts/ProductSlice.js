import { createSlice } from "@reduxjs/toolkit";
import { delSpace } from "../../5shared/helpers/delSpace";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: JSON.parse(localStorage.getItem("products"))
      ? JSON.parse(localStorage.getItem("products"))
      : [],
    template: [
      { text: "бананы", id: 1, status: false },
      { text: "кефир", id: 2, status: false },
      { text: "колбаса", id: 3, status: false },
      { text: "конфеты", id: 4, status: false },
      { text: "кофе", id: 5, status: false },
      { text: "курица", id: 6, status: false },
      { text: "масло", id: 7, status: false },
      { text: "молоко", id: 8, status: false },
      { text: "огурцы", id: 9, status: false },
      { text: "сахар", id: 10, status: false },
      { text: "сметана", id: 11, status: false },
      {
        text: "средства личной гигиены",
        id: 12,
        status: false,
      },
      { text: "хлеб", id: 13, status: false },
      { text: "чай", id: 14, status: false },
      { text: "шоколад", id: 15, status: false },
      { text: "яблоки", id: 16, status: false },
    ],
  },
  reducers: {
    addproduct: (state, action) => {
      state.products.push({
        id: delSpace(action.payload.text),
        text: action.payload.text,
        status: true,
      });
    },
    deleteproduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.item.id
      );
    },
    updateProductList: (state, action) => {
      console.log(action.payload);
      let delItem = null;
      delItem = state.products.filter((item) => {
        return item.text === action.payload.text;
      });
      if (delItem.length > 0) {
        // меняем статус на false
        state.template.map((item) => {
          if (item.text === action.payload.text) {
            item.status = !item.status;
          }
          return;
        });
        // удаляем из массива продуктов
        state.products = state.products.filter((item) => {
          return item.text !== action.payload.text;
        });
      } else {
        state.products.push({
          text: action.payload.text,
          id: delSpace(action.payload.text),
          status: true,
        });
        // меняем статус на true
        state.template.map((item) => {
          if (item.text === action.payload.text) {
            item.status = !item.status;
          }
        });
      }
    },
  },
});
export const { addproduct, deleteproduct, updateProductList } =
  productSlice.actions;
export default productSlice.reducer;
