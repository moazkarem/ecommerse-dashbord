import { forwardRef } from "react";

const Input = forwardRef(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="border-2 border-[#dbdbebde] mb-1 bg-[#1E2021] shadow-md 
    focus:border-[#dbdbebde] focus:outline-none focus:ring-1 text-white
     rounded-md px-3 py-3 text-md
    "
      {...rest}
    />
  );
});
Input.displayName = "Input"; // to make errors clear in debugging if exist error in thios component
export default Input;
