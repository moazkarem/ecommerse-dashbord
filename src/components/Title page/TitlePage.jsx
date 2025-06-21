import { Link } from "react-router-dom";
const TitlePage = ({ path, page }) => {
  return (
    <div className="mb-12 mt-20 flex justify-center items-center gap-2">
      <Link to={'/'} className="text-[#fff] text-[18px]"> {path}</Link>
      <span className="text-[#ff0000cc] text-[18px]">{page}</span>
    </div>
  );
};
export default TitlePage;
