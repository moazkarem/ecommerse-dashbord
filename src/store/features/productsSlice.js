import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsData: [],
};
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsAction: (state, action) => {
      state.productsData = action.payload;
    },
  },
});
export const { setProductsAction } = ProductsSlice.actions;

export default ProductsSlice.reducer;
