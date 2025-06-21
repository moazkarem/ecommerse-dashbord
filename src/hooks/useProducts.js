import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getProductsApi,
  addProductApi,
  delProductApi,
  editProductApi,
} from "../api/products";

//============ GET BRANDS HOOK ======

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
  });
};
//============ ADD BRANDS HOOK ======

export const useAddBrand = () => {
  return useMutation({
    mutationFn: addProductApi,
  });
};

//============ DEL BRANDS HOOK ======
export const useDelProduct = () => {
  return useMutation({
    mutationFn: delProductApi,
  });
};

//============ EDIT BRANDS HOOK ======

export const useEditBrand = () => {
  return useMutation({
    mutationFn: editProductApi,
  });
};
