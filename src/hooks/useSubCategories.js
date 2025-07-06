import { useQuery } from "@tanstack/react-query";
import { getSubCategoriesApi } from "../api/subCategories";

export const UseGetSubCategories = () => {
  return useQuery({
    queryFn: getSubCategoriesApi,
    queryKey: ["subcategories"],
  });
};
