import { createSlice } from "@reduxjs/toolkit";

export const User = createSlice({
  name: "user",
  initialState: {
    userList: [],
    id: 0,
    login: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    loginUser: (state, action) => {
      state.login = true;
    },
    signOut: (state) => {
        state.login = false
    }
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { addUser, loginUser, signout } = User.actions;

export default User.reducer;
