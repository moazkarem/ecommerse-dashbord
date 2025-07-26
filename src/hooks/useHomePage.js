import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addHeroApi,
  delHeroApi,
  getHeroData,
  getSingleSlider,
  updateHeroApi,
} from "../api/homepage";


//========= use get all heros  

export const useGetHero = () => {
  return useQuery({
    queryKey: ["herosection"],
    queryFn: getHeroData,
  });
};
//========= use getsingle 

export const useGetSingleSlider = (id) => {
  return useQuery({
    queryKey: ["singleheroslider", id],
    queryFn: () => getSingleSlider(id),
  });
};

//========= use edit hero 


export const useUpdateHero = () => {
  return useMutation({
    mutationFn: updateHeroApi,
  });
};


//========= use add hero 

export const useAddHero = () => {
  return useMutation({
    mutationFn: addHeroApi,
  });
};

//========= use add hero 

export const useDelHero = () => {
  return useMutation({
    mutationFn: delHeroApi,
  });
};
