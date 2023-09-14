import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userModes: [],
  user: false,
};

export const userModeSlice = createSlice({
  name: "user_mode",
  initialState,
  reducers: {
    createUserMode: (state, action) => {
      state.userModes = action.payload;
    },
    login: (state, action) => {
      state.user = true;
    },
    logout: (state, action) => {
      state.user = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUserMode, login, logout } = userModeSlice.actions;

export default userModeSlice.reducer;
