import { MdOutlineArrowRightAlt } from "react-icons/md";

function Button({ children }) {
  return (
    <button
      style={{ transition: "all 300ms ease-in-out" }}
      className="main-btn bg-transparent sm:py-[10px] sm:px-[30px] py-[7px] px-[20px] border-[2px] border-primary hover:text-secondary 
    hover:bg-primary text-sm font-medium hover:px-[10px] flex items-center gap-[5px] overflow-hidden">
      {children}

      <div
        className="arrow relative right-[-50%] hidden"
        style={{ transition: "all 300ms ease-in-out" }}>
        <MdOutlineArrowRightAlt className="text-xl" />
      </div>
    </button>
  );
}

export default Button;
