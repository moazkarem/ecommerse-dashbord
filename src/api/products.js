import server from "./server";

//================ GET BRANDS API ===========
export const getProductsApi = async () => {
  const res = await server.get("/api/v1/products");
  return res;
};

//================ ADD BRANDS API ===========

export const addProductApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/brands", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from add brand res");
  return res;
};

//================ DELETE BRANDS API ===========

export const delProductApi = async (productId) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/products/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from del category res");
  return res;
};

//================ EDIT BRANDS API ===========

export const editProductApi = async ({ formData, catId }) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.put(`/api/v1/brands/${catId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res?.data, "from edit categories api ");
  return res;
};
