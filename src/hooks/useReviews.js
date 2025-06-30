import { useMutation, useQuery } from "@tanstack/react-query";
import { delReviewApi, getAllReviews } from "./../api/reviews";

// =========== GET ALL REVIEWS HOOK
export const useGetAllReviews = () => {
  return useQuery({
    queryFn: getAllReviews,
    queryKey: ["reviews"],
  });
};

// =========== DEL REVIEW HOOK

export const useDelReview = () => {
  return useMutation({
    mutationFn: delReviewApi,
  });
};
