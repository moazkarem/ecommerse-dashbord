import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categoriesSlice";

export const store = configureStore({
  reducer: {
    categoryRed: categoriesSlice,
  },
});
