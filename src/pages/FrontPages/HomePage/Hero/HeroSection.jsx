import { useNavigate } from "react-router-dom";
import { useGetHero } from "../../../../hooks/useHomePage";

const HeroSection = () => {
  const navigate = useNavigate();
  const { data } = useGetHero();
  console.table(data, "data heroo ");
  const renderSections = data?.map((slider, idx) => (
    <div
      key={idx}
      className="bg-[#0E1011] cursor-pointer rounded-xl w-full shadow-lg  p-6   flex flex-col gap-6
      transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
    >
      <div>
        <img
          src={`http://localhost:1337${slider?.image?.url}`}
          className="w-full h-[150px] object-contain rounded-md"
        />
      </div>

      <div className="flex flex-col w-full gap-[10px]">
        <p className="text-[#FF0000] text-start text-[16px] font-bold">
          {slider?.title}
        </p>

        <div
          className="text-[#eaeaea] text-start text-[14px] line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: slider?.description,
          }}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(`/pages/homepage/hero/${slider?.documentId}`)}
          className="mt-2 self-start border border-[#008000] text-white px-4 py-1 rounded-[10px] text-sm"
        >
          Edit
        </button>
        <button className="mt-2 self-start border border-[#FF0000] text-white px-4 py-1 rounded-[10px] text-sm">
          Delete
        </button>
      </div>
    </div>
  ));
  return (
    <div className="mt-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4">
        {renderSections}
      </div>
    </div>
  );
};

export default HeroSection;
