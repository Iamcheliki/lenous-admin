import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";
import clientReducer from "./slices/clientSlice";
import eventReducer from "./slices/eventSlice";
import lpReducer from "./slices/lpSlice";

const reducers = combineReducers({
  user: userReducer,
  order: orderReducer,
  client: clientReducer,
  event: eventReducer,
  lp: lpReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
