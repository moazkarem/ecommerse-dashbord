import { useMutation, useQuery } from "@tanstack/react-query";
import { getHeroData, updateHeroApi } from "../api/homepage";

export const useGetHero = () => {
  return useQuery({
    queryKey: ["herosection"],
    queryFn: getHeroData,
  });
};

export const useUpdateHero = () => {
  return useMutation({
    mutationFn: updateHeroApi,
  });
};
