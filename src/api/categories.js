import server from "./server";

export const getCategoriesApi = async () => {
  const res = await server.get("/api/v1/categories");
  return res;
};

export const addCategoryApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/categories", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from add category res");
  return res;
};

export const delCategoryApi = async (catId) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/categories/${catId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from del category res");
  return res;
};

export const editCatApi = async ({ formData, catId }) => {
   const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.put(`/api/v1/categories/${catId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res?.data, "from edit categories api ");
  return res;
};
