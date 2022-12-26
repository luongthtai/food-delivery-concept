import { createSlice } from "@reduxjs/toolkit";

export const toggleMenu = createSlice({
  name: "toggle",
  initialState: {
    status: true,
  },
  reducers: {
    changeStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { changeStatus } = toggleMenu.actions;

export default toggleMenu.reducer

