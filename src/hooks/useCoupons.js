import { useMutation, useQuery } from "@tanstack/react-query";

import {
  getCouponsApi,
  addCouponApi,
  delCouponApi,
  editCouponApi,
} from "../api/coupons";

//============ GET COUPONS HOOK ======

export const useGetCoupons = () => {
  return useQuery({
    queryKey: ["coupons"],
    queryFn: getCouponsApi,
  });
};
//============ ADD COUPONS HOOK ======

export const useAddCoupon = () => {
  return useMutation({
    mutationFn: addCouponApi,
  });
};

//============ DEL COUPONS HOOK ======
export const useDelCoupon = () => {
  return useMutation({
    mutationFn: delCouponApi,
  });
};

//============ EDIT COUPONS HOOK ======

export const useEditCoupon = () => {
  return useMutation({
    mutationFn: editCouponApi,
  });
};
