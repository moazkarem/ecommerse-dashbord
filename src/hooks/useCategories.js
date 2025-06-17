import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCategoryApi,
  getCategoriesApi,
  delCategoryApi,
  editCatApi,
} from "../api/categories";

//============ GET CATEGORY HOOK ======

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
};
//============ ADD CATEGORY HOOK ======

export const useAddCategory = () => {
  return useMutation({
    mutationFn: addCategoryApi,
  });
};

//============ DEL CATEGORY HOOK ======
export const useDelCategory = () => {
  return useMutation({
    mutationFn: delCategoryApi,
  });
};

//============ EDIT CATEGORY HOOK ======

export const useEditCategory = () => {
  return useMutation({
    mutationFn: editCatApi,
  });
};
