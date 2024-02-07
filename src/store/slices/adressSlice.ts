import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    countryName: "",
    countryId: 0,
    countryCurrency: "",
    subregionName: "",
    subregionId: 0,
    cityName: "",
    cityId: 0,
  },
  reducers: {
    setAddress: (state, action) => {
      console.log("address slice payload", action.payload);
      state.countryName = action.payload.countryName;
      state.countryId = action.payload.countryId;
      state.countryCurrency = action.payload.countryCurrency;
      state.subregionName = action.payload.subregionName;
      state.subregionId = action.payload.subregionId;
      state.cityName = action.payload.cityName;
      state.cityId = action.payload.cityId;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
