import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lpData: {
    totalToken: 0,
    totalLiquidity: 0,
    totalRealizedPnl: 0,
    totalUnrealizedPnl: 0,
  },
};

const lpSlice = createSlice({
  name: "lp",
  initialState,
  reducers: {
    setLpData: (state, action) => {
      state.lpData = { ...action.payload };
    },
  },
});

export const { setLpData } = lpSlice.actions;
export default lpSlice.reducer;
