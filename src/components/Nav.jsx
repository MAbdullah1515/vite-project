import React from "react";
import { VscSearch } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
const Nav = () => {
  return (
    <>
      <div className="w-[100%] grid grid-cols-1 ">
        <div className="bg-gradient-to-r from-[#f78ca0] from-[60%]  to-[#fe9a8b] pt-2 pb-2 pl-2 pr-10 col-strat-1  z-0">
          <VscSearch className="bg-[#0000001A] text-[10px] pr-2 pl-1 text-white font-extrabold rounded-full w-11 h-11 grid  " />
          <div className="float-end grid-cols-3 gap-10 grid-rows-1">
            <img
              src="../src/assets/download.jpg"
              className="  -mt-11 h-11 float-start rounded-full grid-cols-1"
            />
            <FaAngleDown className="grid-cols-1 float-end -mt-8 ml-1 text-white" />
          </div>
        </div>
        {/* <div className="bg-[#f78ca0]   -translate-y-10 w-[20%]">
          <div className="ml-6 mr-2 grid grid-rows-1 grid-cols-2">
            <img src="../src/assets/downloadlogo.png" className="float-start" />
            <button>
              {" "}
              <IoMdMenu className="float-end text-4xl -translate-y-1 text-white" />{" "}
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Nav;
