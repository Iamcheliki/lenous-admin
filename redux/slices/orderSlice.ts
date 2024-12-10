import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: [] as any[],
  openOrders: [] as any[],
};

const orderSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setOrderList: (state, action) => {
      state.orderList = [...action.payload];
    },
    setOpenOrders: (state, action) => {
      state.openOrders = [...action.payload];
    },
  },
});

export const { setOrderList, setOpenOrders } = orderSlice.actions;
export default orderSlice.reducer;
