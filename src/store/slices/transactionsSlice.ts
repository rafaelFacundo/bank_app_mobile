import { createSlice } from "@reduxjs/toolkit";

type transactions = {
  transactionsList: any[];
};

const initialState: transactions = {
  transactionsList: [],
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactionsList = action.payload.transactionsList;
    },
    addTransactionToList: (state, action) => {
      state.transactionsList.push(action.payload.transaction);
    },
  },
});
