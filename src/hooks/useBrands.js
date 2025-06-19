import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getBrandsApi,
  addBrandApi,
  editBrandApi,
  delBrandApi,
} from "./../api/brands";

//============ GET BRANDS HOOK ======

export const useGetBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getBrandsApi,
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
