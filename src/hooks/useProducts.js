import { useMutation, useQuery } from "@tanstack/react-query";
import {
 
  addBrandApi,
  editBrandApi,
  delBrandApi,
} from "./../api/brands";
import { getProductsApi } from "../api/products";

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
    mutationFn: addBrandApi,
  });
};

//============ DEL BRANDS HOOK ======
export const useDelBrand = () => {
  return useMutation({
    mutationFn: delBrandApi,
  });
};

//============ EDIT BRANDS HOOK ======

export const useEditBrand = () => {
  return useMutation({
    mutationFn: editBrandApi,
  });
};
