import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from './../api/reviews';

export const useGetAllReviews = () => {
  return useQuery({
    queryFn: getAllReviews,
    queryKey: ["reviews"],
  });
};
