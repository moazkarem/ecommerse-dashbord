import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponsData: [],
};
export const couponsSlice = createSlice({
  name: "coupons",
  initialState,
  reducers: {
    setCouponsAction: (state, action) => {
      state.couponsData = action.payload;
    },
  },
});
export const { setCouponsAction } = couponsSlice.actions;

export default couponsSlice.reducer;
