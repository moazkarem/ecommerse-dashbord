import server from "./server";

export const getCategoriesApi = async () => {
  const res = await server.get("/api/v1/categories");
  return res;
};

export const addCategoryApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.data?.token;
  const res = await server.post("/api/v1/categories", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from add category res");
  return res;
};
