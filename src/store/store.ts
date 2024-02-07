import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import accountReducer from "./slices/accountSlice";
import addressReducer from "./slices/adressSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    address: addressReducer,
  },
});

export default store;
