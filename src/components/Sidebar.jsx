// // import { BiChevronDown } from "react-icons/bi";
// // import { IoSettingsOutline } from "react-icons/io";
// // import { ImConnection } from "react-icons/im";
// // import { SlCalender } from "react-icons/sl";

// // import { MdManageAccounts } from "react-icons/md";
// // import { HiOutlineDocumentReport } from "react-icons/hi";
// // import { SlEnvolopeLetter } from "react-icons/sl";
// // import { FaReceipt } from "react-icons/fa";
// // import { FaHandHoldingUsd } from "react-icons/fa";
// // import { GiSchoolBag } from "react-icons/gi";
// // import { CiBellOn } from "react-icons/ci";
// // import { SlPeople } from "react-icons/sl";
// // import { CgProfile } from "react-icons/cg";
// // import { AiOutlineDashboard } from "react-icons/ai";
// // import { BsBuildings } from "react-icons/bs";
// // import { ImCross } from "react-icons/im";
// // import React from 'react'
// // import { useDispatch, useSelector } from "react-redux";
// // import setSidebar from '../redux/slices/SidebarSlice'
// // // import { VscOrganization } from "react-icons/vs"; // Corrected

// // export const Sidebar = () => {

// //     const sidebar = useSelector((state)=>state.sidebar)
// //   const dispatch = useDispatch();

// //     const handleSidebar = () =>{
// //         dispatch(setSidebar(false))
// //         console.log("sidebar",sidebar)
// //     }

// //   return (
// //     <div>
// //         <div>
// //             <div>Menu</div>
// //             <div onClick={handleSidebar}><ImCross/></div>
// //         </div>
// //         <div>
// //             <div>
// //                 <AiOutlineDashboard />
// //                 DashBoard
// //             </div>
// //             <div>
// //                <div><BsBuildings /> Company Profile</div>
// //                <div><BiChevronDown /></div>
// //             </div>
// //             <div>
// //                 <div><CgProfile /> My Profile</div>
// //                 <div><BiChevronDown /></div>
// //             </div>
// //             <div>
// //                 <div><SlPeople />Directory</div>

// //             </div>
// //             <div>
// //                 <div><CiBellOn />Attendence</div>
// //                 <div><BiChevronDown /></div>
// //             </div>
// //             <div>
// //                 <div><GiSchoolBag />Leave</div>
// //                 <div><BiChevronDown /></div>
// //             </div>
// //             <div>
// //                 <div><FaHandHoldingUsd />Payroll</div>
// //                 <div><BiChevronDown /></div>
// //             </div>
// //             <div>
// //                 <div><FaReceipt />Expense Payout</div>
// //             </div>
// //             <div>
// //                 <div><SlEnvolopeLetter />Letters</div>
// //             </div>
// //             <div>
// //                 <div><HiOutlineDocumentReport />Reports</div>
// //             </div>
// //             <div>
// //                 <div><MdManageAccounts />Assets Management</div>
// //             </div>
// //             <div>
// //                 {/* <div><VscOrganization />Organization chart</div> */}
// //             </div>
// //             <div>
// //                 <div><SlCalender />Holiday Calender</div>
// //             </div>
// //             <div>
// //                 <div><ImConnection />Connect</div>
// //             </div>
// //             <div>
// //                 <div><IoSettingsOutline />Settings</div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }
// import React, { useState } from "react";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import { ImConnection } from "react-icons/im";
// import { SlCalender } from "react-icons/sl";
// import { MdManageAccounts } from "react-icons/md";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { SlEnvolopeLetter } from "react-icons/sl";
// import { FaReceipt } from "react-icons/fa";
// import { FaHandHoldingUsd } from "react-icons/fa";
// import { GiSchoolBag } from "react-icons/gi";
// import { CiBellOn } from "react-icons/ci";
// // import { SlPeople } from "react-icons/sl";
// import { CgProfile } from "react-icons/cg";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { BsBuildings } from "react-icons/bs";
// import { ImCross } from "react-icons/im";
// import { useDispatch, useSelector } from "react-redux";
// import { setSidebar } from "../redux/slices/SidebarSlice";

// import { Link } from "react-router-dom";
// export const Sidebar = () => {
//   const sidebar = useSelector((state) => state.sidebar);
//   const dispatch = useDispatch();
//   console.log(sidebar);
//   const [companyProfileDropdownOpen, setCompanyProfileDropdownOpen] =
//     useState(false);
//   const [myProfileDropdownOpen, setMyProfileDropdownOpen] = useState(false);
//   const [attendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
//   const [leaveDropdownOpen, setLeaveDropdownOpen] = useState(false);
//   const [payrollDropdownOpen, setPayrollDropdownOpen] = useState(false);

//   const handleSidebar = () => {
//     dispatch(setSidebar(false));
//     console.log("sidebar", sidebar);
//   };

//   return (
//     <div className="w-[230px] h-[100vh] flex flex-col bg-slate-50  items-center ">
//       <div className="flex flex-row  justify-center items-center w-full  p-5 border-b  border-black">
//         <div className="w-[50%] text-lg font-semibold text-slate-700 uppercase ">
//           Menu
//         </div>
//         <div
//           className="w-[50%] self-end pl-[40%] pb-1 text-medium text-center text-slate-700 cursor-pointer"
//           onClick={handleSidebar}
//         >
//           <ImCross />
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-evenly w-[95%]">
//         <div className="flex flex-row  w-full gap-3 p-1 pl-2">
//           <div className="text-2xl text-blue-500 self-start ">
//             {" "}
//             <AiOutlineDashboard />
//           </div>
//           <div className="w-[80%] text-sm  ">DashBoard</div>
//         </div>
//         <div className="flex flex-row  w-full gap-3 p-1 pl-2 ">
//           <div
//             className="flex flex-row gap-3 "
//             onClick={() =>
//               setCompanyProfileDropdownOpen(!companyProfileDropdownOpen)
//             }
//           >
//             <BsBuildings className="text-2xl text-blue-500" />
//             <div className="text-sm hover:text-blue-500 "> Company Profile</div>
//           </div>
//           <div
//             className=" ml-5 flex text-3xl text-center text-blue-500 cursor-pointer"
//             onClick={() =>
//               setCompanyProfileDropdownOpen(!companyProfileDropdownOpen)
//             }
//           >
//             {companyProfileDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </div>
//         </div>
//         {companyProfileDropdownOpen && (
//           <div className="w-full pl-11 text-sm ">
//             <Link to="/company-profile/address">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Address</div>
//             </Link>
//             <Link to="/company-profile/department">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Department</div>
//             </Link>
//             <Link to="/company-profile/designation">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Designations</div>
//             </Link>
//             <Link to="/company-profile/annoucements">
//               <div className="text-sm hover:text-blue-500 ">Announcements</div>
//             </Link>
//             <Link to="/company-profile/policies">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">
//                 Policies & Statutory Info
//               </div>
//             </Link>
//             <Link to="/company-profile/admin">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Admins</div>
//             </Link>
//             <Link to="myplan">
//               <div>My Plan</div>
//             </Link>
//           </div>
//         )}
//         <div className="flex flex-row  w-full gap-7 p-1 pl-2 ">
//           <div
//             className="flex flex-row gap-3 "
//             onClick={() => setMyProfileDropdownOpen(!myProfileDropdownOpen)}
//           >
//             <CgProfile className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm hover:text-blue-500 ">My Profile</div>
//           </div>
//           <div
//             className="w-[35%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer"
//             onClick={() => setMyProfileDropdownOpen(!myProfileDropdownOpen)}
//           >
//             {myProfileDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </div>
//         </div>
//         {myProfileDropdownOpen && (
//           <div className="w-full pl-11 text-sm">
//             <Link to="/my-profile/work">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Work</div>
//             </Link>
//             <Link to="/my-profile/team">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Team</div>
//             </Link>
//             <Link to="/my-profile/education">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Education</div>
//             </Link>
//             <Link to="/my-profile/family">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Family</div>
//             </Link>
//             <Link to="/my-profile/documents">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">Documents</div>
//             </Link>
//             <Link to="/my-profile/file-manager">
//               {" "}
//               <div className="text-sm hover:text-blue-500 ">File Manager</div>
//             </Link>
//           </div>
//         )}
//         <div className="flex flex-row  w-full gap-7 p-1 pl-2 ">
//           <div
//             className="flex flex-row gap-3 "
//             onClick={() => setAttendanceDropdownOpen(!attendanceDropdownOpen)}
//           >
//             <CiBellOn className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm">Attendance</div>
//           </div>
//           <div
//             className="w-[32%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer"
//             onClick={() => setAttendanceDropdownOpen(!attendanceDropdownOpen)}
//           >
//             {attendanceDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </div>
//         </div>
//         {attendanceDropdownOpen && (
//           <div className="w-full pl-11 text-sm">
//             <Link to=" /attendence/logs">
//               {" "}
//               <div>Logs</div>
//             </Link>
//             <div to="/attendence/automation-logs">Automation Logs</div>
//             <div to="/attendence/rules">Rules</div>
//             <div to="/attendence/approvals">Approvals</div>
//             <div to="/attendence/analytics">Analytics</div>
//             <div>Settings</div>
//           </div>
//         )}
//         <div className="flex flex-row  w-full gap-8 p-1 pl-2 ">
//           <div
//             className="flex flex-row gap-3 "
//             onClick={() => setLeaveDropdownOpen(!leaveDropdownOpen)}
//           >
//             <GiSchoolBag className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm">Leave</div>
//           </div>
//           <div
//             className="w-[47%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer"
//             onClick={() => setLeaveDropdownOpen(!leaveDropdownOpen)}
//           >
//             {leaveDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </div>
//         </div>
//         {leaveDropdownOpen && (
//           <div className="w-full pl-11 text-sm">
//             <Link to="/leave/logs">
//               <div>Logs</div>
//             </Link>
//             <div to="/leave/rules">Rules</div>
//             <div to="/leave/balance">Balance</div>
//           </div>
//         )}
//         <div className="flex flex-row  w-full gap-8 p-1 pl-2 ">
//           <div
//             className="flex flex-row gap-3 "
//             onClick={() => setPayrollDropdownOpen(!payrollDropdownOpen)}
//           >
//             <FaHandHoldingUsd className="text-2xl text-blue-500" />
//             <div className="text-sm"> Payroll</div>
//           </div>
//           <div
//             className="w-[44.5%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer"
//             onClick={() => setPayrollDropdownOpen(!payrollDropdownOpen)}
//           >
//             {payrollDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
//           </div>
//         </div>
//         {payrollDropdownOpen && (
//           <div className="w-full pl-11 text-sm">
//             <Link to="/payroll/run-payroll">
//               {" "}
//               <div>Run Payroll</div>
//             </Link>
//             <Link to="/payroll/setup-payroll">
//               {" "}
//               <div>Setup Payroll</div>
//             </Link>
//             <Link to="/payroll/declaration">
//               {" "}
//               <div>Declaration</div>
//             </Link>
//             <Link to="/payroll/advance-settings">
//               {" "}
//               <div>Advance Settings</div>
//             </Link>
//             <Link to="/payroll/audit-history">
//               {" "}
//               <div>Audit History</div>
//             </Link>
//           </div>
//         )}
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <Link to="">
//             {" "}
//             <div className="flex flex-row gap-3 ">
//               <FaReceipt className="text-2xl text-blue-500" />{" "}
//               <div className="text-sm">Expense Payout</div>
//             </div>
//           </Link>
//         </div>
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <div className="flex flex-row gap-3 ">
//             <SlEnvolopeLetter className="text-2xl text-blue-500" />
//             <div className="text-sm"> Letters</div>
//           </div>
//         </div>
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <div className="flex flex-row gap-3 ">
//             <HiOutlineDocumentReport className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm">Reports</div>{" "}
//           </div>
//         </div>
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <div className="flex flex-row gap-3 ">
//             <MdManageAccounts className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm"> Assets Management</div>
//           </div>
//         </div>
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <div className="flex flex-row gap-3 ">
//             <SlCalender className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm">Holiday Calender</div>
//           </div>
//         </div>
//         <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
//           <div className="flex flex-row gap-3 ">
//             <ImConnection className="text-2xl text-blue-500" />{" "}
//             <div className="text-sm">Connect</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { AiOutlinePieChart } from "react-icons/ai";
import { BiPieChartAlt } from "react-icons/bi";
import { RiMastercardLine } from "react-icons/ri";
import { MdOutlineAccountTree } from "react-icons/md";
import { BiUnite } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { BiBookOpen } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiTemplate } from "react-icons/hi";
import { MdAccountBox } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { RiFilePaper2Line } from "react-icons/ri";
import { RiFilePaperFill } from "react-icons/ri";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import { BiPurchaseTag } from "react-icons/bi";
import { SiSalesforce } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
import { TbReportMoney } from "react-icons/tb";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GiExpense } from "react-icons/gi";
import { TbFileInvoice } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { setSidebar } from "../redux/slices/SidebarSlice";
import { useDispatch, useSelector } from "react-redux";
export const Sidebar = () => {
  const [currentLocation, setLocation] = useState("");
  const locationc = useLocation();
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  useEffect(() => {
    setLocation(locationc.pathname.slice(5, locationc.pathname.length));
  }, [locationc]);
  const [slide, setSlide] = useState(true);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
   const handleCloseSlidebar =()=>{
    dispatch(setSidebar(!sidebar));
   }
  return (
    <>
      {/* <button
        className="fixed xl:hidden block left-3 top-4"
        onClick={() => {
          setSlide(!slide);
        }}
      >
        <CgMenuLeftAlt size={30} />
      </button> */}
      <div
        className={`top-[70px] w-full min-h-[100vh] h-full flex gap-0 transition-all xl:opacity-100  xl:w-14 xl:hover:w-52 xl:pointer-events-auto fixed top-20${
          slide ? "opacity-0  " : "opacity-100"
        }`}
      >
        <div class=" flex flex-col flex-auto flex-shrink-0 antialiased bg-white text-gray-800 w-52 xl:w-14 xl:hover:w-52">
          <div
            class={`${
              slide ? "-left-52" : "left-0"
            } xl:left-0 transition-all fixed flex flex-col  left-0 w-52 xl:w-14 xl:hover:w-52 bg-white h-full border-r`}
          >
            <div class="overflow-y-auto overflow-x-hidden flex-grow">
              <ul class="flex flex-col py-4 space-y-1">
                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="dashboard"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "dashboard"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <div className="dropdown">
                  <button
                    onClick={() =>
                      document
                        .getElementById("masterdropdown")
                        .classList.toggle("hidden")
                    }
                    className={`flex  justify-between w-full items-center gap-2 hover:bg-blue-200 text-gray-600 hover:text-gray-800 border-l-4 py-2`}
                  >
                    <span className="flex">
                      <RiMastercardLine size={20} className="ml-4 mr-2" />
                      <p className="text-sm  tracking-wide truncate pl-2">
                        Company Profile
                      </p>{" "}
                    </span>
                    <IoMdArrowDropdown />
                  </button>
                  <ul id="masterdropdown" className="menu hidden">
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/address"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "create-account"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdAccountBox size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Address
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/overview"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "create-account"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdAccountBox size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                       Overview
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/department"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "create-item"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <HiTemplate size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Department
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/designation"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "unit"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <BiUnite size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Designations
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/announcement"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "charts"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAccountTree size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Announcements
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/policies"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "charts"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAccountTree size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Policies & Statutory Info
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/company-profile/admin"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "charts"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAccountTree size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Admins
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="myplan"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "charts"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAccountTree size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          My Plan
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button
                    onClick={() =>
                      document
                        .getElementById("salesDropdown")
                        .classList.toggle("hidden")
                    }
                    className={`flex  justify-between w-full items-center gap-2 hover:bg-blue-200 text-gray-600 hover:text-gray-800 border-l-4 py-2`}
                  >
                    <span className="flex">
                      <BiBookOpen size={20} className="ml-4 mr-2" />
                      <p className="text-sm  tracking-wide truncate pl-2">
                        My Profile
                      </p>{" "}
                    </span>
                    <IoMdArrowDropdown />
                  </button>
                  <ul id="salesDropdown" className="menu hidden">
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/work"
                        className={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-invoice"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <FaFileInvoiceDollar />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Work
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/team"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-report"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Team
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/education"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-quotation"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <SiSalesforce />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Education
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/family"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-return"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Family
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/documents"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-return"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Documents
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/my-profile/file-manager"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "sales-return"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          File Manager
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button
                    onClick={() =>
                      document
                        .getElementById("purchaseDropdown")
                        .classList.toggle("hidden")
                    }
                    className={`flex justify-between w-full items-center gap-2 hover:bg-blue-200 text-gray-600 hover:text-gray-800 border-l-4 py-2`}
                  >
                    <span className="flex">
                      <CgShoppingBag size={20} className="ml-4 mr-2" />
                      <p className="text-sm pl-2 tracking-wide truncate">
                        Attendance
                      </p>{" "}
                    </span>
                    <IoMdArrowDropdown />
                  </button>
                  <ul id="purchaseDropdown" className="menu hidden">
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/attendence/automation-logs"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "purchase-orders"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <BiPurchaseTag />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Automation Logs
                        </span>
                      </Link>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/attendence/rules"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "purchase-bill"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Rules
                        </span>
                      </Link>

                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/attendence/approvals"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "purchase-returns"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Approvals
                        </span>
                      </Link>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/attendence/analytics"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "purchase-returns"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Analytics
                        </span>
                      </Link>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to=""
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "purchase-returns"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <MdOutlineAssignmentReturn />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Settings
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button
                    onClick={() =>
                      document
                        .getElementById("reportsDropdown")
                        .classList.toggle("hidden")
                    }
                    className={`flex  justify-between w-full items-center gap-2 hover:bg-blue-200 text-gray-600 hover:text-gray-800 border-l-4 py-2`}
                  >
                    <span className="flex">
                      <AiOutlinePieChart size={20} className="ml-4 mr-2" />
                      <p className="text-sm pl-2 tracking-wide truncate">
                        Leave
                      </p>{" "}
                    </span>
                    <IoMdArrowDropdown />
                  </button>
                  <ul id="reportsDropdown" className="menu hidden">
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/leave/logs"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Logs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/leave/rules"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Rules
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/leave/balance"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "ledger"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Balance
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button
                    onClick={() =>
                      document
                        .getElementById("payrollDropdown")
                        .classList.toggle("hidden")
                    }
                    className={`flex  justify-between w-full items-center gap-2 hover:bg-blue-200 text-gray-600 hover:text-gray-800 border-l-4 py-2`}
                  >
                    <span className="flex">
                      <AiOutlinePieChart size={20} className="ml-4 mr-2" />
                      <p className="text-sm pl-2 tracking-wide truncate">
                        Payroll
                      </p>{" "}
                    </span>
                    <IoMdArrowDropdown />
                  </button>
                  <ul id="payrollDropdown" className="menu hidden">
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/payroll/run-payroll"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Run Payroll
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/payroll/setup-payroll"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Setup Payroll
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/payroll/declaration"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Declaration
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/payroll/advance-settings"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "tax"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <TbReportMoney size={20} />
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Advance Settings
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setSlide(true);
                        }}
                        to="/payroll/audit-history"
                        class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                          currentLocation === "ledger"
                            ? "border-blue-900"
                            : "border-transparent"
                        }  hover:border-blue-900 pr-6`}
                      >
                        <span class="inline-flex justify-center items-center ml-4">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            ></path>
                          </svg>
                        </span>
                        <span class="ml-2 text-sm tracking-wide truncate">
                          Audit History
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Expense Payout
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Letters
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Reports
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Assets Management
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Holiday Calender
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => {
                      setSlide(true);
                    }}
                    to="inventory"
                    class={`relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 ${
                      currentLocation === "inventory"
                        ? "border-blue-900"
                        : "border-transparent"
                    }  hover:border-blue-900 pr-6`}
                  >
                    <span class="inline-flex justify-center items-center ml-4">
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">
                    Connect
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="w-[calc(100%-208px)] h-full xl:opacity-0 realtive bg-[#0003] cursor-pointer xl:pointer-events-none sm:pointer-events-auto"
          onClick={handleCloseSlidebar}
        >
          <button
            className="absolute right-2 top-2 bg-gray-200 border border-gray-100 rounded-full flex justify-center items-center w-7 h-7 hover:rotate-90 duration-200"
            onClick={handleCloseSlidebar}
          >
            <CgClose />
          </button>
        </div>
      </div>
    </>
  );
};
