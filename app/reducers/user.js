import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userConnected: false,
  name: "",
  surname: "",
  token: "",
  userId: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedStatus: (state, action) => {
      state.userConnected = action.payload;
      //console.log("userConnected:", state.userConnected);
    },
    userId: (state, action) => {
      state.userId = action.payload;
      //console.log("userConnected:", state.userConnected);
    },
    loggedName: (state, action) => {
      state.name = action.payload;
    },
    loggedSurname: (state, action) => {
      state.surname = action.payload;
    },
    loggedToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { loggedStatus, userId, loggedName, loggedSurname, loggedToken } =
  user.actions;
export default user.reducer;
