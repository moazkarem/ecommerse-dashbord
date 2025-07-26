import axios from "axios";

export const getAllBlogsApi = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs?populate=*`
  );
  // console.log(res, "get all blogs  ");
  return res?.data?.data;
};

export const getSingleSlider = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs/${id}?populate=*`
  );
  // console.log(res, "get hero section data in home page ");
  return res?.data?.data;
};

//=============UPDATE HERO
export const updateHeroApi = async ({ finalData, id }) => {
  const res = await axios.put(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs/${id}`,
    { data: finalData }
  );

  // console.log(res, "update hero data");
  return res;
};

//=============ADD HERO

export const addBlogApi = async (data) => {
  const res = await axios.post(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs`,
    { data }
  );

  console.log(res, "add hero data");
  return res?.data;
};

//=============DELETE HERO

export const delHeroApi = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_SECOND_DOMAIN}/blogs/${id}`
  );

  console.log(res, "del hero data");
  return res;
};
