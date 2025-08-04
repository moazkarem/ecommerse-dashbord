import server from "./server";

//================ GET PRODUCTS API ===========
export const getProductsApi = async () => {
  const res = await server.get("/api/v1/products");
  return res;
};

//================ ADD PRODUCTS API ===========

export const addProductApi = async (formData) => {
  console.log(formData , 'formmmmmdata');
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/products", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from add product res");
  return res;
};

//================ DELETE PRODUCTS API ===========

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

//================ EDIT PRODUCTS API ===========

export const editProductApi = async ({ formData, productId }) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.put(`/api/v1/products/${productId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res?.data, "from edit product api ");
  return res;
};
