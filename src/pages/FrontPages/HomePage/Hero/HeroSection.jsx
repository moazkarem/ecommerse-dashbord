import { useNavigate } from "react-router-dom";
import { useGetHero } from "../../../../hooks/useHomePage";
import AddButton from "../../../../components/Add Button/AddButton";
import { useState } from "react";
import DelHero from "./DelHero";
import { imageClean } from "../../../../helpers/imageClean";

const HeroSection = () => {
  const navigate = useNavigate();
  const { data } = useGetHero();
  const [deletedSlider, setDeletedSlider] = useState({});
  const [isOpenDel, setIsOpenDel] = useState(false);
  const openModalDel = (selectedSlirer) => {
    setIsOpenDel(true);
    setDeletedSlider(selectedSlirer);
  };
  const closeModalDel = () => setIsOpenDel(false);

  //============ RENDER HERO SLIDERS
  const sortedData = data?.sort(
    (x, y) => new Date(y.createdAt) - new Date(x.createdAt)
  );
  const renderSections = sortedData?.map((slider, idx) => (
    <div
      key={idx}
      className="bg-[#0E1011] cursor-pointer rounded-xl w-full shadow-lg  p-6   flex flex-col gap-6
      transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
    >
      <div>
        <img
          src={`${imageClean(slider?.image?.url)}`}
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
        <button
          onClick={() => openModalDel(slider)}
          className="mt-2 self-start border border-[#FF0000] text-white px-4 py-1 rounded-[10px] text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  //============ ADD NAVIGATE HANDELER
  const addNavigate = () => {
    navigate("/pages/homepage/hero/addhero");
  };
  return (
    <div className="mt-12 ">
      <div>
        <AddButton title={"Add New Hero  Slider"} add={addNavigate} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4">
        {renderSections}
      </div>

      <DelHero
        key={deletedSlider._id}
        isOpen={isOpenDel}
        closeModal={closeModalDel}
        deletedSlider={deletedSlider}
      />
    </div>
  );
};

export default HeroSection;
