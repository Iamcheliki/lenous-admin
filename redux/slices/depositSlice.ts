import { createSlice } from "@reduxjs/toolkit";

interface State {
  depositList: any[];
}

const initialState: State = {
  depositList: [],
};

const depositSlice = createSlice({
  name: "deposit",
  initialState,
  reducers: {
    setDepositList: (state, action) => {
      state.depositList = [...action.payload];
    },
  },
});

export const { setDepositList } = depositSlice.actions;
export default depositSlice.reducer;
