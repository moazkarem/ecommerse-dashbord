import { useGetHero } from "../../../../hooks/useHomePage";

import HeroForm from "./HeroEdit.jsx";
const HeroSection = () => {
  const { data } = useGetHero();

  return (
    <div className="mt-6 px-10">
      {data?.map((slider, idx) => (
        <HeroForm key={idx} slider={slider} />
      ))}
    </div>
  );
};

export default HeroSection;
