import axios from "axios";

export const getAboutApi = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/aboutpages?populate=*`
  );
  // console.log(res, "get all about   ");
  return res?.data?.data;
};

//=============UPDATE HERO
export const updateAboutApi = async ({ finalData, id }) => {
  const res = await axios.put(
    `${import.meta.env.VITE_SECOND_DOMAIN}/aboutpages/${id}`,
    { data: finalData }
  );

  // console.log(res, "update about  data");
  return res;
};
