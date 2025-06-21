import BarCharts from "./BarChart";
import BieCharts from "./BieChart";
import { FaHome } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { TbBrandAngularFilled } from "react-icons/tb";
import { MdDiscount } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { BiLogoProductHunt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
const Home = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-[#0E1011] rounded-xl w-full shadow-lg p-6 px-6 flex flex-col items-start justify-start gap-8 h-44
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-start items-center w-full gap-4 border-b border-[#cbcbe21d] pb-4">
              <span className="p-2 bg-[#ed1d24] rounded-full">
                <FaHome className="text-white text-[20px]" />
              </span>
              <p className="text-[#ed1d24] text-[18px] font-semibold ">
                Total Orders
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-white text-start text-[16px] font-bold">100</p>
              <p className="text-white text-start text-[16px] font-bold">
                Order
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4">
        <BarCharts />
        <BieCharts />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-[#0E1011] rounded-xl w-full shadow-lg p-6 px-6 flex flex-col items-start justify-start gap-8 h-44
            transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-start items-center w-full gap-4 border-b border-[#cbcbe21d] pb-4">
              <span className="p-2 bg-[#ed1d24] rounded-full">
                <FaHome className="text-white text-[20px]" />
              </span>
              <p className="text-[#ed1d24] text-[18px] font-semibold ">
                Total Orders
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-white text-start text-[16px] font-bold">100</p>
              <p className="text-white text-start text-[16px] font-bold">
                Order
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
