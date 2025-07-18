import { useQuery } from "@tanstack/react-query";
import { getHeroData } from "../api/homepage";

export const useGetHero = () => {
  return useQuery({
    queryKey: ["herosection"],
    queryFn: getHeroData,
  });
};
