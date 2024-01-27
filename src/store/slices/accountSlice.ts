import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    amount: 0,
  },
  reducers: {
    addAmount: (state, action) => {
      state.amount += action.payload.value;
    },
    decrementAmount: (state, action) => {
      state.amount -= action.payload.value;
    },
    setAmount: (state, action) => {
      state.amount = action.payload.value;
    },
  },
});

export const { addAmount, decrementAmount, setAmount } = accountSlice.actions;

export default accountSlice.reducer;
