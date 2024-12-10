import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";
import clientReducer from "./slices/clientSlice";

const reducers = combineReducers({
  user: userReducer,
  order: orderReducer,
  client: clientReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
