import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userName: null,
    email: null,
    userId: null,
  },
  reducers: {
    setActiveUser: (state, { payload }) => {
      const { email, userName, userId } = payload;
      state.isLoggedIn = true;
      state.email = email;
      state.userName = userName;
      state.userId = userId;
    },
    removeActiveUser: (state) => {
      state.isLoggedIn = false;
      state.email = null;
      state.userName = null;
      state.userId = null;
    },
  },
});

export const { setActiveUser, removeActiveUser } = authSlice.actions;

const selectAuthState = (state) => state.auth;
export const selectIsLoggedIn = (state) => selectAuthState(state).isLoggedIn;
export const selectEmail = (state) => selectAuthState(state).email;
export const selectUserName = (state) => selectAuthState(state).userName;
export const selectUserId = (state) => selectAuthState(state).userId;

export default authSlice.reducer;
