import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotificationsNone } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { RiArrowDownSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../redux/slices/SidebarSlice";
export const Navbar = () => {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(setSidebar(true));
    console.log("sidebar", sidebar);
  };

  return (
    <div className=" flex flex-row gap-0 bg-slate-300 items-center justify-evenly w-[100vw] h-[70px] text-black border-r-black">
      <div className="flex flex-row items-center justify-end gap-3 w-[18%]">
        <div onClick={handleSidebar} className="text-3xl">
          <GiHamburgerMenu />
        </div>
        <NavLink to="/">
          <div>
            <img
              src="https://www.webseeder.in/_next/static/media/full-logo.bd4a4437.png"
              width="150px"
              alt=""
            />
          </div>
        </NavLink>
      </div>
      <div className="flex relative">
        <input
          className="w-[800px] border border-zinc-500 p-2 rounded-md"
          type="text"
        />
        <div className=" absolute text-2xl left-[95%] top-2">
          {" "}
          <IoSearchOutline />
        </div>
      </div>
      <div className="flex flex-row gap-2 text-3xl items-center justify-center">
        <div>
          <BsFillQuestionSquareFill />
        </div>
        <div>
          <MdNotificationsNone />
        </div>
        <div className="border border-zinc-950 rounded-full w-[30px] h-[30px]">
          <img src="" alt="" />
        </div>
        <div>
          <RiArrowDownSLine />
        </div>
      </div>
    </div>
  );
};
