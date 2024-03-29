import { createSlice } from "@reduxjs/toolkit";

export const keySlice = createSlice({
  name: "key",
  initialState: {
    key: "",
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload.key;
    },
  },
});

export const { setKey } = keySlice.actions;

export default keySlice.reducer;
