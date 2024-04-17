import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";

const data = useLocalStorage("cart");

const initialState = {
   data: data.getItem(),
   quantity: data.getItem().length,
};

const cartSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      AddCart: (state, action) => {
         const dataExist = state.data.find(
            item => item.id === action.payload.id
         );
         if (dataExist) {
            dataExist.quantity++;
            return;
         }
         state.data.push({ ...action.payload, quantity: 1 });
         state.quantity++;
      },
      removeCart: (state, action) => {
         const check = state.data.find(item => item.id === action.payload.id);
         if (check) {
            const updatedData = state.data.filter(
               item => item.id !== action.payload.id
            );
            state.data = updatedData;
            state.quantity--;
         }
      },
      increamentQuantity: (state, action) => {
         const check = state.data.find(item => item.id === action.payload.id);
         if (check) {
            check.quantity++;
         }
      },
      decreamentQuantity: (state, action) => {
         const check = state.data.find(
            item => item.id === action.payload.id && item.quantity > 1
         );
         if (check) {
            check.quantity--;
         }
         // c
      },
   },
});

export const { AddCart, removeCart, increamentQuantity, decreamentQuantity } =
   cartSlice.actions;

export default cartSlice.reducer;
