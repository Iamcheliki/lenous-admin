import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";
import clientReducer from "./slices/clientSlice";
import eventReducer from "./slices/eventSlice";
import lpReducer from "./slices/lpSlice";
import depositReducer from "./slices/depositSlice";

const reducers = combineReducers({
  user: userReducer,
  order: orderReducer,
  client: clientReducer,
  event: eventReducer,
  lp: lpReducer,
  deposit: depositReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
