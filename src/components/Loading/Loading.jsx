import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <ClipLoader color="#ffffff" size={60} />
    </div>
  );
};

export default Loading;