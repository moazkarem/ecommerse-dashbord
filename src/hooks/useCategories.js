import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addCategoryApi,
  getCategoriesApi,
  delCategoryApi,
} from "../api/categories";

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

export const useDelCategory = () => {
  return useMutation({
    mutationFn: delCategoryApi,
  });
};
