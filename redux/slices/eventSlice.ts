import { createSlice } from "@reduxjs/toolkit";

export enum LogType {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  ORDER_PLACE = "order placed",
  ORDER_MATCH = "order matched",
  ORDER_FILL_LP = "order filled by lp",
  ORDER_LIQUID = "order closed by margin hit",
  ORDER_SL_TP = "order close bt Sl/Tp hit",
  LP_DEPOST = "lp deposit",
}
export interface Log {
  type: LogType;
  data: any;
  date: string;
}
const initialState = {
  logs: [] as Log[],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setLogList: (state, action) => {
      state.logs = [...state.logs, action.payload];
    },
  },
});

export const { setLogList } = eventSlice.actions;
export default eventSlice.reducer;
