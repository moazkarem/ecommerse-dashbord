import { useMutation, useQuery } from "@tanstack/react-query";
import { getHeroData, getSingleSlider, updateHeroApi } from "../api/homepage";

export const useGetHero = () => {
  return useQuery({
    queryKey: ["herosection"],
    queryFn: getHeroData,
  });
};

export const useGetSingleSlider = (id) => {
  return useQuery({
    queryKey: ["singleheroslider" , id],
    queryFn: ()=>getSingleSlider(id),
  });
};

export const useUpdateHero = () => {
  return useMutation({
    mutationFn: updateHeroApi,
  });
};
