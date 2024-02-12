import { createSlice } from "@reduxjs/toolkit";

export const keySlice = createSlice({
  name: "key",
  initialState: {
    key: "fsdfsdfsdf",
  },
  reducers: {
    setKey: (state, action) => {
      console.log(action);
      state.key = action.payload.key;
    },
  },
});

export const { setKey } = keySlice.actions;

export default keySlice.reducer;
