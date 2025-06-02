import server from "./server";
export const loginApi = async (data) => {
  const res = await server.post("/api/v1/auth/login", data);
  return res;
};
