import { useQuery } from "@tanstack/react-query";
import { getCategoriesApi } from '../api/categories';


export const useGetCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesApi,
  });
};
