import { Link } from "react-router-dom";
import { homeData } from "./data";

const HomePage = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {homeData?.map(({ path, icon, title }, idx) => (
          <Link
            to={path}
            key={idx}
            className="bg-[#0E1011] cursor-pointer rounded-xl w-full shadow-lg p-6 px-6 flex flex-col items-start justify-start gap-8 h-44
              transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-start items-center w-full gap-4 border-b border-[#cbcbe21d] pb-4">
              <span className="p-2 bg-[#ed1d24] rounded-full">{icon}</span>
              <p className="text-[#ed1d24] text-[18px] font-semibold">
                {title}
              </p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-white text-start text-[16px] font-bold">
                {title}
              </p>
              <p className="text-white text-start text-[16px] font-bold">
                desc
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
