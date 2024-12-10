import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";
import activeUser from "./slices/activeUserSlice";

const reducers = combineReducers({
  user: userReducer,
  order: orderReducer,
  activeUser: activeUser,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
