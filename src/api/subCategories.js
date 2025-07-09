import server from "./server";

export const getSubCategoriesApi = async () => {
  const res = await server.get("/api/v1/subcategories");
  return res;
};

export const addSubCategoryApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/subcategories", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from add sub category res");
  return res;
};

export const delSubCategoryApi = async (subCatId) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/subcategories/${subCatId}`, {
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
