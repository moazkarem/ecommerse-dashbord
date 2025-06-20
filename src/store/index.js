import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./features/categoriesSlice";
import brandsSlice from "./features/brandsSlice";
import couponsSlice from "./features/couponsSlice";
import  ordersSlice  from "./features/ordersSlice";

export const store = configureStore({
  reducer: {
    categoryRed: categoriesSlice,
    brandsRed: brandsSlice,
    couponRed: couponsSlice,
    ordersRed: ordersSlice,
  },
});
