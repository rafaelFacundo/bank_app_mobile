import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import accountReducer from "./slices/accountSlice";
import addressReducer from "./slices/adressSlice";
import keyReducer from "./slices/keySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    account: accountReducer,
    address: addressReducer,
    key: keyReducer,
  },
});

export default store;
