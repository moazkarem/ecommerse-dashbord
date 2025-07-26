import { useMutation, useQuery } from "@tanstack/react-query";
import { delHeroApi, updateHeroApi } from "../api/homepage";
import { addBlogApi, getAllBlogsApi, getSingleBlog, updateBlogApi } from "../api/blogsPage";

//========= use get all heros

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogsApi,
  });
};
//========= use getsingle

export const useGetSingleBlog = (id) => {
  return useQuery({
    queryKey: ["singleblog", id],
    queryFn: () => getSingleBlog(id),
  });
};

//========= use edit hero

export const useUpdateBlog = () => {
  return useMutation({
    mutationFn: updateBlogApi,
  });
};

//========= use add hero

export const useAddBlog = () => {
  return useMutation({
    mutationFn: addBlogApi,
  });
};

//========= use add hero

export const useDelBlog = () => {
  return useMutation({
    mutationFn: delHeroApi,
  });
};
