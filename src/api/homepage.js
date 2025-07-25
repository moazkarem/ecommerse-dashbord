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
export const updateHeroApi = async ({ data, id }) => {
  const res = await axios.put(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections/${id}`,
    {data}
  );

  console.log(res, "update hero data");
  return res;
};
