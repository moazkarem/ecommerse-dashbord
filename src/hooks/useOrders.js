import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllOrdersApi, updatePaymentApi } from "../api/orders";

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
