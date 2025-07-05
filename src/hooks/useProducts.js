import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProductsApi,
  addProductApi,
  delProductApi,
  editProductApi,
} from "../api/products";

//============ GET PRODUCTS HOOK ======

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
  });
};
//============ ADD PRODUCTS HOOK ======

export const useAddProduct = () => {
  return useMutation({
    mutationFn: addProductApi,
  });
};

//============ DEL PRODUCTS HOOK ======
export const useDelProduct = () => {
  return useMutation({
    mutationFn: delProductApi,
  });
};

//============ EDIT PRODUCTS HOOK ======

export const useEditProduct = () => {
  return useMutation({
    mutationFn: editProductApi,
  });
};
