// import React from 'react'
// import { Link } from 'react-router-dom';
// export const My_profile_Nav = () => {

//     const categoryArray =  [
//        "Stationery",
//         "Personal",
//         "Work",
//         "Team",
//         "Education",
//         "Family",
//         "Documents",
//         "Work Week",
//         "Attendance",
//         "Leave",
//         "Payroll",
//         "E-Exit",
//         "File Manager"
//       ]

//   return (
//     <nav className="bg-gray-800 py-4 w-[100vw] ">
//       <div className="container mx-auto flex justify-center items-center">

//         <ul className="flex space-x-4">
//           {categoryArray.map((category, index) => (
//             <li key={index}>
//               <Link to={`/Company-Profile/${category.toLowerCase()}`} className="text-white hover:text-gray-300">{category}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// export const My_profile_Nav = () => {
//   const navRef = useRef(null);

//   const handleScroll = (scrollOffset) => {
//     navRef.current.scrollLeft += scrollOffset;
//   };

//   const categoryArray = [
//     "Stationery",
//     "Personal",
//     "Work",
//     "Team",
//     "Education",
//     "Family",
//     "Documents",
//     "Work Week",
//     "Attendance",
//     "Leave",
//     "Payroll",
//     "E-Exit",
//     "File Manager"
//   ];

//   return (
//     <nav className="bg-gray-800 py-4 w-screen">
//       <div className="container mx-auto flex justify-center items-center w-[44%]">
//         <button
//           onClick={() => handleScroll(-100)}
//           className="flex items-center justify-center mr-2 text-white hover:text-gray-300 focus:outline-none"
//         >
//           <BsChevronLeft className="text-xl" />
//         </button>
//         <ul ref={navRef} className="flex space-x-4 overflow-x-auto">
//           {categoryArray.map((category, index) => (
//             <li key={index}>
//               <Link to={`/Company-Profile/${category.toLowerCase()}`} className="text-white hover:text-gray-300">{category}</Link>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={() => handleScroll(100)}
//           className="flex items-center justify-center ml-2 text-white hover:text-gray-300 focus:outline-none"
//         >
//           <BsChevronRight className="text-xl" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default My_profile_Nav;
// import React, { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// export const My_profile_Nav = () => {
//   const navRef = useRef(null);

//   const handleScroll = (scrollOffset) => {
//     navRef.current.scrollLeft += scrollOffset;
//   };

//   const categoryArray = [
//     "Stationery",
//     "Personal",
//     "Work",
//     "Team",
//     "Education",
//     "Family",
//     "Documents",
//     "Work Week",
//     "Attendance",
//     "Leave",
//     "Payroll",
//     "E-Exit",
//     "File Manager"
//   ];

//   return (
//     <nav className="bg-gray-800 py-4  flex items-center justify-center">
//       <div className="container mx-auto flex items-center">
//         <button
//           onClick={() => handleScroll(-100)}
//           className="flex items-center justify-center mr-2 text-white hover:text-gray-300 focus:outline-none"
//         >
//           <BsChevronLeft className="text-xl" />
//         </button>
//         <div
//           ref={navRef}
//           className="flex space-x-4"
//           style={{ width: '44%', overflowX: 'hidden' }}
//         >
//           {categoryArray.map((category, index) => (
//             <Link
//               key={index}
//               to={`/Company-Profile/${category.toLowerCase()}`}
//               className="text-white hover:text-gray-300 whitespace-nowrap"
//             >
//               {category}
//             </Link>
//           ))}
//         </div>
//         <button
//           onClick={() => handleScroll(100)}
//           className="flex items-center justify-center ml-2 text-white hover:text-gray-300 focus:outline-none"
//         >
//           <BsChevronRight className="text-xl" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default My_profile_Nav;
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const My_profile_Nav = () => {
  const navRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    navRef.current.scrollLeft += scrollOffset;
  };

  const categoryArray = [
    "Stationery",
    "Personal",
    "Work",
    "Team",
    "Education",
    "Family",
    "Documents",
    "Work Week",
    "Attendance",
    "Leave",
    "Payroll",
    "E-Exit",
    "File Manager",
  ];

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center ">
          <button
            onClick={() => handleScroll(-100)}
            className="flex items-center justify-center mr-2 text-white hover:text-gray-300 focus:outline-none"
          >
            <BsChevronLeft className="text-xl" />
          </button>
          <div
            ref={navRef}
            className="flex space-x-4"
            style={{ width: "44%", overflowX: "hidden" }}
          >
            {categoryArray.map((category, index) => (
              <Link
                key={index}
                to={`/my-profile/${category.toLowerCase()}`}
                className="text-white hover:text-gray-300 whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
          <button
            onClick={() => handleScroll(100)}
            className="flex items-center justify-center ml-2 text-white hover:text-gray-300 focus:outline-none"
          >
            <BsChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default My_profile_Nav;
