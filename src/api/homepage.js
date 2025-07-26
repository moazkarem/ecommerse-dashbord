import axios from "axios";

export const getHeroData = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections?populate=*`
  );
  // console.log(res, "get hero section data in home page ");
  return res?.data?.data;
};

export const getSingleSlider = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections/${id}?populate=*`
  );
  // console.log(res, "get hero section data in home page ");
  return res?.data?.data;
};

//=============UPDATE HERO
export const updateHeroApi = async ({ finalData, id }) => {
  const res = await axios.put(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections/${id}`,
    { data: finalData }
  );

  // console.log(res, "update hero data");
  return res;
};

//=============ADD HERO
export const addHeroApi = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections`,
    { data }
  );

  console.log(res, "add hero data");
  return res;
};
