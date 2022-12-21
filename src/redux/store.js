import { configureStore } from "@reduxjs/toolkit";
import { toggleMenu } from "./reduce/reduce.js";

export const store = configureStore({
  reducer: {
    toggle: toggleMenu.reducer
  },
});
