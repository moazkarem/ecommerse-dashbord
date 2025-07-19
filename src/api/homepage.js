import axios from "axios";

export const getHeroData = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections?populate=*`
  );
  // console.log(res, "get hero section data in home page ");
  return res?.data?.data;
};

export const updateHeroApi = async ({formData, id}) => {
  console.log(formData,'dataaa');
  const res = await axios.put(
    `${import.meta.env.VITE_SECOND_DOMAIN}/herosections/${id}`,
    {
      data: formData,
    }
  );
  console.log(res, "update hero date ");
  return res;
};
