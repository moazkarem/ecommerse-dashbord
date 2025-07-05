import { forwardRef } from "react";

const TextArea = forwardRef(({ ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      className="border-2 border-[#dbdbebde] mb-1 bg-[#1E2021] shadow-md 
     focus:border-[#dbdbebde] focus:outline-none focus:ring-1 text-white
       rounded-md px-3 py-3 text-md
       min-h-40
  "
      {...rest}
    ></textarea>
  );
});

TextArea.displayName = "TextArea";
export default TextArea;
