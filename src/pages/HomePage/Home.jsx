import BarCharts from "./BarChart";
import BieCharts from "./BieChart";
import { TbCategoryFilled } from "react-icons/tb";
import { TbBrandAngularFilled } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { BiLogoProductHunt } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { useGetOrders } from "../../hooks/useOrders";
import { useGetBrands } from "../../hooks/useBrands";
import { useGetCategories } from "../../hooks/useCategories";
import { useGetProducts } from "../../hooks/useProducts";
import { useGetCoupons } from "../../hooks/useCoupons";
import { useGetUsers } from "../../hooks/useUser";
import { Link } from "react-router-dom";
// import { useGetOrders } from "../../hooks/useOrders";
const Home = () => {
  const { data: orders } = useGetOrders();
  const { data: brands } = useGetBrands();
  const { data: categories } = useGetCategories();
  const { data: products } = useGetProducts();
  const { data: coupons } = useGetCoupons();
  const { data: users } = useGetUsers();

  const topSec = [
    {
      navigate: "/orders",
      title: "Total Orders",
      icon: <TbReorder className="text-white text-[20px]" />,
      desc: "Order",
      statistic: orders?.data?.data?.length,
    },
    {
      navigate: "/brands",
      title: "All Brands",
      icon: <TbBrandAngularFilled className="text-white text-[20px]" />,
      desc: "Brand",
      statistic: brands?.data?.data?.length,
    },
    {
      navigate: "/products",
      title: "Product Statistics",
      icon: <BiLogoProductHunt className="text-white text-[20px]" />,
      desc: "Product",
      statistic: products?.data?.data?.length,
    },
  ];

  const bottomSec = [
    {
      navigate: "/categories",
      title: "Store Categories",
      icon: <TbCategoryFilled className="text-white text-[20px]" />,
      desc: "Category",
      statistic: categories?.data?.data?.length,
    },
    {
      navigate: "/coupons",
      title: "Available Coupons",
      icon: <MdDiscount className="text-white text-[20px]" />,
      desc: "Coupon",
      statistic: coupons?.data?.data?.length,
    },
    {
      navigate: "/users",
      title: "Logged Users",
      icon: <FaUserFriends className="text-white text-[20px]" />,
      desc: "user",
      statistic: users?.data?.data?.length,
    },
  ];

 
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {topSec?.map(({ navigate, title, icon, desc, statistic }, idx) => (
          <Link
            to={navigate}
            key={idx}
            className="bg-[#0E1011] cursor-pointer rounded-xl w-full shadow-lg p-6 px-6 flex flex-col items-start justify-start gap-8 h-44
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-start items-center w-full gap-4 border-b border-[#cbcbe21d] pb-4">
              <span className="p-2 bg-[#ed1d24] rounded-full">{icon}</span>
              <p className="text-[#ed1d24] text-[18px] font-semibold ">
                {title}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-white text-start text-[16px] font-bold">
                {statistic || 100}
              </p>
              <p className="text-white text-start text-[16px] font-bold">
                {desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
        <BarCharts />
        <BieCharts />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {bottomSec?.map(({ navigate, title, icon, desc, statistic }, idx) => (
          <Link
            to={navigate}
            key={idx}
            className="bg-[#0E1011] cursor-pointer rounded-xl w-full shadow-lg p-6 px-6 flex flex-col items-start justify-start gap-8 h-44
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-start items-center w-full gap-4 border-b border-[#cbcbe21d] pb-4">
              <span className="p-2 bg-[#ed1d24] rounded-full">{icon}</span>
              <p className="text-[#ed1d24] text-[18px] font-semibold ">
                {title}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-white text-start text-[16px] font-bold">
                {statistic || "NaN"}
              </p>
              <p className="text-white text-start text-[16px] font-bold">
                {desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
