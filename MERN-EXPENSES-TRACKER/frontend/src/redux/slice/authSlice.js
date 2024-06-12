import { createSlice } from "@reduxjs/toolkit";

//! initial statee
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("userInfo")) || null,
  },
  // 1 Reducer
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    // Logout
    logoutAction: (state, action) => {
      state.user = null;
    },
  },
});
//! Generate actions
export const { loginAction, logoutAction } = authSlice.actions;
//! Generate the reducers
const authReducer = authSlice.reducer;
export default authReducer;
