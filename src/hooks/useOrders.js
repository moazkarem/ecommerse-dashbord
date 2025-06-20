import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getAllOrdersApi,
  updatePaymentApi,
  updateDeleveryApi,
  getSingleOrderApi,
} from "../api/orders";

//============ GET BRANDS HOOK ======
export const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrdersApi,
  });
};

//============ UPDATE PAYMENT STATUS HOOK ======
export const useUpdatePayment = () => {
  return useMutation({
    mutationFn: updatePaymentApi,
  });
};

//============ UPDATE DELEVERY STATUS HOOK ======
export const useUpdateDelevery = () => {
  return useMutation({
    mutationFn: updateDeleveryApi,
  });
};

//============ GET SINGLE ORDER HOOK ======
export const useGetSingleOrders = () => {
  return useQuery({
    queryKey: ["singleorder"],
    queryFn: getSingleOrderApi,
  });
};