import { Ibrand, IbrandResponse } from "../types/brands";
import server from "./server";

//================ GET BRANDS API ===========
export const getBrandsApi = async () => {
  const res = await server.get<IbrandResponse>("/api/v1/brands");
  return res.data;
};

//================ ADD BRANDS API ===========

// export const addBrandApi = async (data) => {
//   const storedUser = localStorage.getItem("userData");
//   const userData = storedUser ? JSON.parse(storedUser) : null;
//   const token = userData?.token;
//   const res = await server.post("/api/v1/brands", data, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   console.log(res, "from add brand res");
//   return res;
// };

//================ DELETE BRANDS API ===========

export const delBrandApi = async (brandId: string) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete<void>(`/api/v1/brands/${brandId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from del category res");
  return res.status=== 204;
};

//================ EDIT BRANDS API ===========

// export const editBrandApi = async ({ formData, catId }) => {
//   const storedKey = localStorage.getItem("userData");
//   const userData = storedKey ? JSON.parse(storedKey) : null;
//   const token = userData?.token;
//   const res = await server.put(`/api/v1/brands/${catId}`, formData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   // console.log(res?.data, "from edit categories api ");
//   return res;
// };
