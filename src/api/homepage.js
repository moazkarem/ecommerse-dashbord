import axios from "axios";

export const getHeroData = async () => {
  const res = await axios.get(
    "http://localhost:1337/api/herosections?populate=*"
  );
  // console.log(res, "get hero section data in home page ");
  return res?.data?.data;
};
