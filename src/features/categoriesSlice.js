import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesData: [],
};
export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesAction: (state, action) => {
      state.categoriesData = action.payload;
    },
  },
});
export const { setCategoriesAction } = categorySlice.actions;

export default categorySlice.reducer;
