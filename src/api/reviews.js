import server from "./server";

const storedKey = localStorage.getItem("userData");
const userData = storedKey ? JSON.parse(storedKey) : null;
const token = userData?.token;

// ================= GET ALL REVIEWS

export const getAllReviews = async () => {
  const res = await server.get("/api/v1/reviews");
  // console.log(res, "res from get all reviews ");
  return res;
};

// =================  DEL REVIEW

export const delReviewApi = async (reviewId) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;
  const res = await server.delete(`/api/v1/reviews/${reviewId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res, "from delete review");
  return res;
};

// ================= ADD REVIEW

export const addReviewApi = async (formData) => {
  const storedKey = localStorage.getItem("userData");
  const userData = storedKey ? JSON.parse(storedKey) : null;
  const token = userData?.token;

  const res = await server.post("/api/v1/reviews", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res, "from add review");
  return res;
};
