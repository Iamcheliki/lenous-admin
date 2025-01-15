import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [] as any[],
  activeUsers: [] as any[],
};

const clientSlice = createSlice({
  name: "client",
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

export const { setUserList, setActiveUser } = clientSlice.actions;
export default clientSlice.reducer;
