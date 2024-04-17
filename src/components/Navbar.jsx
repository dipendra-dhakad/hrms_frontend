// import React from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdNotificationsNone } from "react-icons/md";
// import { IoSearchOutline } from "react-icons/io5";
// import { BsFillQuestionSquareFill } from "react-icons/bs";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setSidebar } from "../redux/slices/SidebarSlice";
// export const Navbar = () => {
//   const sidebar = useSelector((state) => state.sidebar);
//   const dispatch = useDispatch();

//   const handleSidebar = () => {
//     dispatch(setSidebar(true));
//     console.log("sidebar", sidebar);
//   };

//   return (
//     <div className=" flex flex-row gap-0 bg-slate-300 items-center justify-evenly w-[100vw] md:w-[100vw] h-[70px] text-black border-r-black">
//       <div className="flex flex-row items-center justify-end gap-3 w-[18%]">
//         <div onClick={handleSidebar} className="text-3xl">
//           <GiHamburgerMenu />
//         </div>
//         <NavLink to="/">
//           <div>
//             <img
//               src="https://www.webseeder.in/_next/static/media/full-logo.bd4a4437.png"
//               width="150px"
//               alt=""
//             />
//           </div>
//         </NavLink>
//       </div>
//       <div className="flex relative">
//         <input
//           className="w-[800px] border border-zinc-500 p-2 rounded-md"
//           type="text"
//         />
//         <div className=" absolute text-2xl left-[95%] top-2">
//           {" "}
//           <IoSearchOutline />
//         </div>
//       </div>
//       <div className="flex flex-row gap-2 text-3xl items-center justify-center">
//         <div>
//           <BsFillQuestionSquareFill />
//         </div>
//         <div>
//           <MdNotificationsNone />
//         </div>
//         <div className="border border-zinc-950 rounded-full w-[30px] h-[30px]">
//           <img src="" alt="" />
//         </div>
//         <div>
//           <RiArrowDownSLine />
//         </div>
//       </div>
//     </div>
//   );
// };
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
    <div className="navbar flex items-center justify-center  bg-slate-300 w-[100%] md:w-[100%] sm:w-[100%]  h-16 text-black border-r-black">
      <div className="flex flex-row items-center justify-between w-[80%]"><div className="flex items-center gap-3">
        <div onClick={handleSidebar} className="text-3xl ">
          <GiHamburgerMenu />
        </div>
        <NavLink to="/">
          <img
            src="https://www.webseeder.in/_next/static/media/full-logo.bd4a4437.png"
           className="w-[100px] sm:w-[100px] md:w-[150px]"
            alt=""
          />
        </NavLink>
      </div>
      <div className="hidden md:flex items-center gap-2 relative">
        <input
          className="border-[0.5px] border-zinc-500 p-2 rounded-md pr-8 w-[600px]"
          type="text"
          placeholder="Search"
        />
        <IoSearchOutline className="text-2xl absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
      <div className="flex gap-2 items-center justify-center md:justify-end">
        <div>
          <BsFillQuestionSquareFill />
        </div>
        <div>
          <MdNotificationsNone />
        </div>
        <div className="hidden md:flex border border-zinc-950 rounded-full w-8 h-8">
          <img src="" alt="" />
        </div>
        <div>
          <RiArrowDownSLine />
        </div>
      </div></div>
    </div>
  );
};

