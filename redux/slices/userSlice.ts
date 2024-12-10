import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
  isLogin: true,
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setIsLogin, setUserUserName } = userSlice.actions;
export default userSlice.reducer;
