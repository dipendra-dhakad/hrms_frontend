// import { BiChevronDown } from "react-icons/bi"; 
// import { IoSettingsOutline } from "react-icons/io"; 
// import { ImConnection } from "react-icons/im"; 
// import { SlCalender } from "react-icons/sl"; 

// import { MdManageAccounts } from "react-icons/md"; 
// import { HiOutlineDocumentReport } from "react-icons/hi"; 
// import { SlEnvolopeLetter } from "react-icons/sl"; 
// import { FaReceipt } from "react-icons/fa"; 
// import { FaHandHoldingUsd } from "react-icons/fa"; 
// import { GiSchoolBag } from "react-icons/gi"; 
// import { CiBellOn } from "react-icons/ci"; 
// import { SlPeople } from "react-icons/sl"; 
// import { CgProfile } from "react-icons/cg"; 
// import { AiOutlineDashboard } from "react-icons/ai"; 
// import { BsBuildings } from "react-icons/bs"; 
// import { ImCross } from "react-icons/im"; 
// import React from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import setSidebar from '../redux/slices/SidebarSlice'
// // import { VscOrganization } from "react-icons/vs"; // Corrected 


// export const Sidebar = () => {
     
//     const sidebar = useSelector((state)=>state.sidebar)
//   const dispatch = useDispatch();

//     const handleSidebar = () =>{
//         dispatch(setSidebar(false))
//         console.log("sidebar",sidebar)
//     }


//   return (
//     <div>
//         <div>
//             <div>Menu</div>
//             <div onClick={handleSidebar}><ImCross/></div>
//         </div>
//         <div>
//             <div>
//                 <AiOutlineDashboard />
//                 DashBoard
//             </div>
//             <div>
//                <div><BsBuildings /> Company Profile</div>
//                <div><BiChevronDown /></div>
//             </div>
//             <div> 
//                 <div><CgProfile /> My Profile</div>
//                 <div><BiChevronDown /></div>
//             </div>
//             <div>
//                 <div><SlPeople />Directory</div>
               
//             </div>
//             <div>
//                 <div><CiBellOn />Attendence</div>
//                 <div><BiChevronDown /></div>
//             </div>
//             <div>
//                 <div><GiSchoolBag />Leave</div>
//                 <div><BiChevronDown /></div>
//             </div>
//             <div>
//                 <div><FaHandHoldingUsd />Payroll</div>
//                 <div><BiChevronDown /></div>
//             </div>
//             <div>
//                 <div><FaReceipt />Expense Payout</div>
//             </div>
//             <div>
//                 <div><SlEnvolopeLetter />Letters</div>
//             </div>
//             <div>
//                 <div><HiOutlineDocumentReport />Reports</div>
//             </div>
//             <div>
//                 <div><MdManageAccounts />Assets Management</div>
//             </div>
//             <div>
//                 {/* <div><VscOrganization />Organization chart</div> */}
//             </div>
//             <div>
//                 <div><SlCalender />Holiday Calender</div>
//             </div>
//             <div>
//                 <div><ImConnection />Connect</div>
//             </div>
//             <div>
//                 <div><IoSettingsOutline />Settings</div>
//             </div>
//         </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi"; 
import { ImConnection } from "react-icons/im"; 
import { SlCalender } from "react-icons/sl"; 
import { MdManageAccounts } from "react-icons/md"; 
import { HiOutlineDocumentReport } from "react-icons/hi"; 
import { SlEnvolopeLetter } from "react-icons/sl"; 
import { FaReceipt } from "react-icons/fa"; 
import { FaHandHoldingUsd } from "react-icons/fa"; 
import { GiSchoolBag } from "react-icons/gi"; 
import { CiBellOn } from "react-icons/ci"; 
// import { SlPeople } from "react-icons/sl"; 
import { CgProfile } from "react-icons/cg"; 
import { AiOutlineDashboard } from "react-icons/ai"; 
import { BsBuildings } from "react-icons/bs"; 
import { ImCross } from "react-icons/im"; 
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from '../redux/slices/SidebarSlice';

import { Link } from 'react-router-dom';
export const Sidebar = () => {
    const sidebar = useSelector((state)=>state.sidebar)
    const dispatch = useDispatch();
console.log(sidebar)
    const [companyProfileDropdownOpen, setCompanyProfileDropdownOpen] = useState(false);
    const [myProfileDropdownOpen, setMyProfileDropdownOpen] = useState(false);
    const [attendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
    const [leaveDropdownOpen, setLeaveDropdownOpen] = useState(false);
    const [payrollDropdownOpen, setPayrollDropdownOpen] = useState(false);

    const handleSidebar = () =>{
        dispatch(setSidebar(false))
        console.log("sidebar",sidebar)
    }

    return (
        <div className="w-[250px] h-[100vh] flex flex-col bg-slate-50  items-center ">
            <div className="flex flex-row  items-center w-full  p-4 border-b  border-black">
                <div className="w-[50%] ">Menu</div>
                <div className="w-[50%] self-end pl-[30%] text-xl" onClick={handleSidebar}><ImCross/></div>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[95%]">
                <div className="flex flex-row  w-full gap-3 p-1 pl-2">
                    <div className="text-2xl text-blue-500 self-start "> <AiOutlineDashboard /></div>
                    <div className="w-[80%] ">DashBoard</div>
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 " onClick={() => setCompanyProfileDropdownOpen(!companyProfileDropdownOpen)}>
                        <BsBuildings className="text-2xl text-blue-500"/> Company Profile
                    </div>
                    <div className=" ml-5 flex text-3xl text-center text-blue-500 cursor-pointer" onClick={() => setCompanyProfileDropdownOpen(!companyProfileDropdownOpen)}>
                        {companyProfileDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                </div>
                {companyProfileDropdownOpen && (
                    <div className='w-full pl-11'>
                       <Link to="/company-profile/address"> <div>Address</div></Link>
                       <Link to="/company-profile/department"> <div>Department</div></Link>
                       <Link to="/company-profile/designation"> <div>Designations</div></Link>
                        <Link to='/company-profile/annoucements'><div>Announcements</div></Link>
                      <Link to="/company-profile/policies">  <div>Policies & Statutory Info</div></Link>
                       <Link to="/company-profile/admin"> <div>Admins</div></Link>
                        <Link to='myplan'><div>My Plan</div></Link>
                    </div>
                )}
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 " onClick={() => setMyProfileDropdownOpen(!myProfileDropdownOpen)}>
                        <CgProfile className="text-2xl text-blue-500" /> My Profile
                    </div>
                    <div className="w-[35%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer" onClick={() => setMyProfileDropdownOpen(!myProfileDropdownOpen)}>
                        {myProfileDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                </div>
                {myProfileDropdownOpen && (
                    <div className='w-full pl-11'>
                        <Link to="/my-profile/work"> <div>Work</div></Link>
                       <Link  to="/my-profile/team"> <div>Team</div></Link>
                       <Link  to="/my-profile/education"> <div>Education</div></Link>
                        <Link  to="/my-profile/family">  <div>Family</div></Link>
                        <Link to="/my-profile/documents">  <div>Documents</div></Link>
                        <Link to="/my-profile/file-manager">   <div>File Manager</div></Link>
                    </div>
                )}
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 " onClick={() => setAttendanceDropdownOpen(!attendanceDropdownOpen)}>
                        <CiBellOn className="text-2xl text-blue-500" /> Attendance
                    </div>
                    <div className="w-[32%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer" onClick={() => setAttendanceDropdownOpen(!attendanceDropdownOpen)}>
                        {attendanceDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                </div>
                {attendanceDropdownOpen && (
                    <div className='w-full pl-11'>
                       <Link to=" /attendence/logs"> <div>Logs</div></Link>
                        <div to="/attendence/automation-logs">Automation Logs</div>
                        <div to="/attendence/rules">Rules</div>
                        <div to="/attendence/approvals">Approvals</div>
                        <div to="/attendence/analytics">Analytics</div>
                        <div>Settings</div>
                    </div>
                )}
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 " onClick={() => setLeaveDropdownOpen(!leaveDropdownOpen)}>
                        <GiSchoolBag className="text-2xl text-blue-500" /> Leave
                    </div>
                    <div className="w-[47%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer" onClick={() => setLeaveDropdownOpen(!leaveDropdownOpen)}>
                        {leaveDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                </div>
                {leaveDropdownOpen && (
                    <div className='w-full pl-11'>
                        <Link to="/leave/logs"><div>Logs</div></Link>
                        <div to="/leave/rules">Rules</div>
                        <div to="/leave/balance">Balance</div>
                    </div>
                )}
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 " onClick={() => setPayrollDropdownOpen(!payrollDropdownOpen)}>
                        <FaHandHoldingUsd className="text-2xl text-blue-500" /> Payroll
                    </div>
                    <div className="w-[44.5%] justify-end flex text-3xl text-center text-blue-500 cursor-pointer" onClick={() => setPayrollDropdownOpen(!payrollDropdownOpen)}>
                        {payrollDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
                    </div>
                </div>
                {payrollDropdownOpen && (
                    <div className='w-full pl-11'>
                    <Link to="/payroll/run-payroll">    <div>Run Payroll</div></Link>
                   <Link to="/payroll/setup-payroll">      <div>Setup Payroll</div></Link>
                    <Link to="/payroll/declaration" >    <div>Declaration</div></Link>
                     <Link  to="/payroll/advance-settings">   <div>Advance Settings</div></Link>
                      <Link to="/payroll/audit-history">  <div>Audit History</div></Link>
                    </div>
                )}
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <Link to="">          <div className="flex flex-row gap-3 "><FaReceipt className="text-2xl text-blue-500"  /> Expense Payout</div></Link>
          
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 "><SlEnvolopeLetter  className="text-2xl text-blue-500"/> Letters</div>
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div  className="flex flex-row gap-3 "><HiOutlineDocumentReport className="text-2xl text-blue-500"/> Reports</div>
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div  className="flex flex-row gap-3 "><MdManageAccounts className="text-2xl text-blue-500" /> Assets Management</div>
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 "><SlCalender className="text-2xl text-blue-500" /> Holiday Calender</div>
                </div>
                <div className="flex flex-row  w-full gap-10 p-1 pl-2 ">
                    <div className="flex flex-row gap-3 "><ImConnection className="text-2xl text-blue-500" /> Connect</div>
                </div>
            </div>
        </div>
    )
}
