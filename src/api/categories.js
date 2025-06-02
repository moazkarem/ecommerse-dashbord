import server from "./server";

export const getCategoriesApi = async () => {
  const res = await server.get("/api/v1/categories");
  return res;
};
