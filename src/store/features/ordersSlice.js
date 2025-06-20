import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordersData: [],
};
export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setOrdersAction: (state, action) => {
      state.ordersData = action.payload;
    },
  },
});
export const { setOrdersAction } = ordersSlice.actions;

export default ordersSlice.reducer;
