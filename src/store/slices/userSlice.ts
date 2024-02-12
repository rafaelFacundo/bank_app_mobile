import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 51,
    name: "Nome de teste",
    email: "",
    birth_date: "",
    document: "",
    is_active: false,
  },
  reducers: {
    setUser: (state, action) => {
      (state.name = action.payload.user.name),
        (state.email = action.payload.user.email),
        (state.birth_date = action.payload.user.birth_date),
        (state.document = action.payload.user.document),
        (state.is_active = action.payload.user.is_active),
        (state.id = action.payload.user.id);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
