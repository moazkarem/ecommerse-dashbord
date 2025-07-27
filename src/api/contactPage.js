import axios from "axios";

export const getAllContactsApi = async () => {
  const res = await axios.get(`${import.meta.env.VITE_SECOND_DOMAIN}/contacts`);
  // console.log(res, "get all blogs  ");
  return res?.data?.data;
};

export const getSingleContact = async (id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_SECOND_DOMAIN}/contacts/${id}`
  );
  console.log(res, "get single blog data  ");
  return res?.data?.data;
};

//=============DELETE HERO

export const delContactApi = async (id) => {
  const res = await axios.delete(
    `${import.meta.env.VITE_SECOND_DOMAIN}/contacts/${id}`
  );

  console.log(res, "del contact data");
  return res;
};
