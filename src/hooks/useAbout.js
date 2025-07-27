import { useMutation, useQuery } from "@tanstack/react-query";
import { getAboutApi, updateAboutApi } from "../api/aboutPage";

//========= use get all heros

export const useGetAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAboutApi,
  });
};

//========= use edit hero

export const useUpdateAbout = () => {
  return useMutation({
    mutationFn: updateAboutApi,
  });
};
