import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [] as any[],
};

const orderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = [...action.payload];
    },
  },
});

export const { setOrderList } = orderSlice.actions;
export default orderSlice.reducer;
