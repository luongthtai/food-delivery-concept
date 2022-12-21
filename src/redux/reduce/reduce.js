import { createSlice } from "@reduxjs/toolkit";
import { IoTrendingUpSharp } from "react-icons/io5";

export const toggleMenu = createSlice({
  name: "toggle",
  initialState: {
    status: IoTrendingUpSharp,
  },
  reducers: {
    changeStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { changeStatus } = toggleMenu.actions;

export default toggleMenu.reducer

