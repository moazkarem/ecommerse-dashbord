import server from "./server";

//============GET ALL ORDERS ==========
export const getAllOrdersApi = async () => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.get("/api/v1/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res?.data, "from get all orders");
  return res;
};

export const updatePaymentApi = async (orderId) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;

  const res = server.put(
    `/api/v1/orders/${orderId}/pay`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(res?.data, "from get update payment orders");
  return res;
};



export const updateDeleveryApi = async (orderId) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;

  const res = server.put(
    `/api/v1/orders/${orderId}/deliver`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // console.log(res?.data, "from get update delevery orders");
  return res;
};
