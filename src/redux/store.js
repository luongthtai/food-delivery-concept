import { configureStore } from "@reduxjs/toolkit";
import { toggleMenu } from "./reduce/reduce.js";
import { favouriteProduct } from "./reduce/favouriteProduct.js";

export const store = configureStore({
  reducer: {
    toggle: toggleMenu.reducer,
    favourite: favouriteProduct.reducer
  },
});