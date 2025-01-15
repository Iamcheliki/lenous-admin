import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";
import clientReducer from "./slices/clientSlice";
import eventReducer from "./slices/eventSlice";

const reducers = combineReducers({
  user: userReducer,
  order: orderReducer,
  client: clientReducer,
  event: eventReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
