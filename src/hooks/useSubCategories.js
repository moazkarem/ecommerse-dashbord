import { useMutation, useQuery } from "@tanstack/react-query";
import { getSubCategoriesApi , delSubCategoryApi } from "../api/subCategories";

export const UseGetSubCategories = () => {
  return useQuery({
    queryFn: getSubCategoriesApi,
    queryKey: ["subcategories"],
  });
};



//============ ADD CATEGORY HOOK ======

export const useAddCategory = () => {
  return useMutation({
    // mutationFn: addCategoryApi,
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
    // mutationFn: editCatApi,
  });
};
