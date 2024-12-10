import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [] as any[],
  activeUsers: [] as any[],
};

const aclientUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = [...action.payload];
    },
    setActiveUser: (state, action) => {
      state.activeUsers = [...action.payload];
    },
  },
});

export const { setUserList, setActiveUser } = aclientUser.actions;
export default aclientUser.reducer;
