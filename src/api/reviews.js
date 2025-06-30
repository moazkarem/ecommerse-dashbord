import server from "./server";

const storedKey = localStorage.getItem("userData");

const userData = storedKey ? JSON.parse(storedKey) : null;
const token = userData?.token;

// ================= GET ALL REVIEWS

export const getAllReviews = async () => {
  const res = await server.get("/api/v1/reviews");
  console.log(res, "res from get all reviews ");
  return res;
};

// =================  DEL REVIEW

export const delReview = async (reviewId) => {
  const res = await server.delete(`/api/v1/reviews/${reviewId}`, {
    headers: {
      Authorization: `Beare ${token}`,
    },
  });
  console.log(res, "from delete review");
  return res;
};
