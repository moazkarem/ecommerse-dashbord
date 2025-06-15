import { useMutation, useQuery } from "@tanstack/react-query";
import { addCategoryApi, getCategoriesApi } from "../api/categories";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
};

export const useAddCategory = () => {
  return useMutation({
    mutationFn: addCategoryApi,
  });
};
