import server from "./server";

//================ GET COUPONS API ===========
export const getCouponsApi = async () => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.get("/api/v1/coupons", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

//================ ADD COUPONS API ===========

export const addCouponApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/coupons", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from add coupons res");
  return res;
};

//================ DELETE COUPONS API ===========

export const delCouponApi = async (couponId) => {
  console.log(couponId , 'id')
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/coupons/${couponId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from del coupon res");
  return res;
};

//================ EDIT COUPONS API ===========

export const editCouponApi = async ({ formData, catId }) => {
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
