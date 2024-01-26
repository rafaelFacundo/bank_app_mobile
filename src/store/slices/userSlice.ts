import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    birth_date: "",
    document: "",
    is_active: false,
    country: "",
    currency: "",
  },
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.user.name),
        (state.email = action.payload.user.email),
        (state.birth_date = action.payload.user.birth_date),
        (state.document = action.payload.user.document),
        (state.is_active = action.payload.user.is_active),
        (state.country = action.payload.user.country),
        (state.currency = action.payload.user.currency);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
