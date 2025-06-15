import { forwardRef } from "react";

const Input = forwardRef(({ ...rest }, ref) => {
  return (
    <input
      ref={ref}
      className="border-2 border-[#dbdbebde] mb-1 bg-[#232333] shadow-md 
    focus:border-[#dbdbebde] focus:outline-none focus:ring-1 text-white
     rounded-md px-3 py-3 text-md
    "
      {...rest}
    />
  );
});

export default Input;
