import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brandsData: [],
};
export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrandsAction: (state, action) => {
      state.brandsData = action.payload;
    },
  },
});
export const { setBrandsAction } = brandsSlice.actions;

export default brandsSlice.reducer;
