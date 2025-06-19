import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getCouponsApi,
  addCouponApi,
  delCouponApi,
  editCouponApi,
} from "../api/coupons";

//============ GET BRANDS HOOK ======

export const useGetCoupons = () => {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: getCouponsApi,
  });
};
//============ ADD BRANDS HOOK ======

export const useAddBrand = () => {
  return useMutation({
    mutationFn: addCouponApi,
  });
};

//============ DEL BRANDS HOOK ======
export const useDelBrand = () => {
  return useMutation({
    mutationFn: delCouponApi,
  });
};

//============ EDIT BRANDS HOOK ======

export const useEditBrand = () => {
  return useMutation({
    mutationFn: editCouponApi,
  });
};
