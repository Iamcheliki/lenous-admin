import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [] as any[],
};

const activeUser = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserList: (state, action) => {
      state.userList = [...action.payload];
    },
  },
});

export const { setUserList } = activeUser.actions;
export default activeUser.reducer;
