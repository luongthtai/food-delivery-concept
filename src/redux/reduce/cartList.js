import { createSlice } from "@reduxjs/toolkit";

export const cartList = createSlice({
  name: "cart",
  initialState: {
    cartLists: [],
    quantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartLists.push(action.payload);
    },
    deleteProduct: (state, action) => {
        state.cartLists.filter()
    }
  },
});

export const { addProduct } = cartList.actions;

export default cartList.reducer