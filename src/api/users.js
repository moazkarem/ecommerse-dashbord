import server from "./server";

//================ GET USERS API ===========
export const getUsersApi = async () => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

//================ ADD USERS API ===========

export const addUserApi = async (data) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.post("/api/v1/users", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from add brand res");
  return res;
};

//================ DELETE USERS API ===========

export const delUserApi = async (UserId) => {
  const storedUser = localStorage.getItem("userData");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/users/${UserId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from del category res");
  return res;
};

//================ EDIT USERS API ===========

export const editUserApi = async ({ formData, catId }) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.put(`/api/v1/users/${catId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res?.data, "from edit categories api ");
  return res;
};
