import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getSubCategoriesApi,
  delSubCategoryApi,
  addSubCategoryApi,
  editSubCatApi,
} from "../api/subCategories";

export const UseGetSubCategories = () => {
  return useQuery({
    queryFn: getSubCategoriesApi,
    queryKey: ["subcategories"],
  });
};

//============ ADD CATEGORY HOOK ======

export const useAddSubCategory = () => {
  return useMutation({
    mutationFn: addSubCategoryApi,
  });
};

//============ DEL CATEGORY HOOK ======
export const useDelSubCategory = () => {
  return useMutation({
    mutationFn: delSubCategoryApi,
  });
};

//============ EDIT CATEGORY HOOK ======

export const useEditCategory = () => {
  return useMutation({
    mutationFn: editSubCatApi,
  });
};
