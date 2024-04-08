import { BiPencil } from "react-icons/bi"; 

import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import My_address from "./My_address";
import { useDispatch, useSelector } from "react-redux";
import { setOnEdit3 } from "../../redux/slices/MyprofileSlice";
import { Contact } from "./Contact";
import { SocialMediaLinks } from "./SocialMediaLinks";
export const Personal = () => {


   const {onEdit3}=useSelector((state)=>state.myprofile)

  const [onEdit, setOnEdit] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can post formData to your database
    console.log("Form data:", formData);
    // Reset form and toggle edit mode off
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      bloodGroup: "",
      maritalStatus: ""
    });
    setOnEdit(false);
  };

  const handleEdit = () => {
    setOnEdit(!onEdit);
  };

  const bloodGroupOptions = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-"
  ];

  const handleEdit3 = ()=>{
    dispatch(setOnEdit3(!onEdit3));

  }

  return (
    <div className="flex items-center flex-col justify-center gap-2">
      <div className="w-[44%]">
        <div className="flex items-center justify-between p-1 bg-gray-100 border-b-[0.7px] border-gray-500 mb-1">
          <h1 className="text-xl font-semibold mb-4 ml-1 uppercase">
            Personal info
          </h1>
          <div
            onClick={handleEdit}
            className="mr-1 text-xl text-center font-bold cursor-pointer"
          >
            <MdOutlineEdit />
          </div>
        </div>
        <div>
          {onEdit ? (
            // <form onSubmit={handleSubmit}>
            //   <div className="flex flex-col space-y-4">
            //     <div className="flex flex-row ">
            //       <input
            //         type="text"
            //         name="firstName"
            //         value={formData.firstName}
            //         onChange={handleInputChange}
            //         placeholder="First Name"
            //         className="border border-gray-300 rounded-md p-2 w-[50%]"
            //       />
            //       <input
            //         type="text"
            //         name="lastName"
            //         value={formData.lastName}
            //         onChange={handleInputChange}
            //         placeholder="Last Name"
            //         className="border border-gray-300 rounded-md p-2 ml-2 w-[50%]"
            //       />
            //     </div>
            //     <div className="flex flex-row items-center">
            //       <input
            //         type="date"
            //         name="dateOfBirth"
            //         value={formData.dateOfBirth}
            //         onChange={handleInputChange}
            //         placeholder="Date of Birth"
            //         className="border border-gray-300 rounded-md p-2 w-[50%]"
            //       />
            //       <select
            //         name="gender"
            //         value={formData.gender}
            //         onChange={handleInputChange}
            //         className="border border-gray-300 rounded-md p-2 ml-2 w-[50%]"
            //       >
            //         <option value="">Gender</option>
            //         <option value="male">Male</option>
            //         <option value="female">Female</option>
            //         <option value="trans">Transgender</option>
            //       </select>
            //     </div>
            //     <div className="flex flex-row items-center">
            //       <select
            //         name="bloodGroup"
            //         value={formData.bloodGroup}
            //         onChange={handleInputChange}
            //         className="border border-gray-300 rounded-md p-2 w-[50%]"
            //       >
            //         <option value="">Blood Group</option>
            //         {bloodGroupOptions.map((option, index) => (
            //           <option key={index} value={option}>
            //             {option}
            //           </option>
            //         ))}
            //       </select>
            //       <select
            //         name="maritalStatus"
            //         value={formData.maritalStatus}
            //         onChange={handleInputChange}
            //         className="border border-gray-300 rounded-md p-2 ml-2 w-[50%]"
            //       >
            //         <option value="">Marital Status</option>
            //         <option value="married">Married</option>
            //         <option value="single">Single</option>
            //         <option value="committed">Committed</option>
            //       </select>
            //     </div>
            //     <div className="flex justify-end">
            //       <button
            //         type="button"
            //         onClick={handleEdit}
            //         className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300 text-black text-sm font-semibold"
            //       >
            //         Cancel
            //       </button>
            //       <button
            //         type="submit"
            //         className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md"
            //       >
            //         Save
            //       </button>
            //     </div>
            //   </div>
            // </form>
            <form onSubmit={handleSubmit}>
  <div className="flex flex-col space-y-4">
    <div className="flex flex-row space-x-4">
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="firstName" className="text-gray-700">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="lastName" className="text-gray-700">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
    </div>
    <div className="flex flex-row space-x-4 items-center">
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="dateOfBirth" className="text-gray-700">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          placeholder="Date of Birth"
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="gender" className="text-gray-700">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="trans">Transgender</option>
        </select>
      </div>
    </div>
    <div className="flex flex-row space-x-4 items-center">
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="bloodGroup" className="text-gray-700">Blood Group</label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">Blood Group</option>
          {bloodGroupOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-start justify-center w-[50%]">
        <label htmlFor="maritalStatus" className="text-gray-700">Marital Status</label>
        <select
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        >
          <option value="">Marital Status</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="committed">Committed</option>
        </select>
      </div>
    </div>
    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleEdit}
        className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300 text-black text-sm font-semibold"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md"
      >
        Save
      </button>
    </div>
  </div>
</form>

          ) : (
            // <div>
            //   <div className="flex justify-evenly">
            //     <div className="flex flex-col items-center justify-center">
            //       <div>First Name</div>
            //       <div>-</div>
            //     </div>
            //     <div className="flex flex-col items-center justify-center">
            //       <div>Date of Birth</div>
            //       <div>-</div>
            //     </div>
            //     <div className="flex flex-col items-center justify-center">
            //       <div>Gender</div>
            //       <div>-</div>
            //     </div>
            //   </div>
            //   <div>
            //     <div className="flex justify-evenly mt-4">
            //       <div className="flex flex-col items-center justify-center">
            //         <div>Blood Group</div>
            //         <div>-</div>
            //       </div>
            //       <div className="flex flex-col items-center justify-center">
            //         <div>Marital Status</div>
            //         <div>-</div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
            <div>
  <div className="flex justify-evenly">
    <div className="flex flex-col items-center justify-center">
      <div>Name</div>
      <div>-</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div>Date of Birth</div>
      <div>-</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div>Gender</div>
      <div>-</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div>Blood Group</div>
      <div>-</div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div>Marital Status</div>
      <div>-</div>
    </div>
  </div>
</div>


          )}

     


        </div>



      </div>
        <div className="w-[44%] bg-slate-50 pt-2
        mt-2">
          <Contact/>
        </div>

      <div className="w-[44%] bg-slate-50 mt-2">
       <div className="flex flex-row items-center justify-between p-3 border-b border-gray-600 ">
        <div className="w-[50%]] self-start pt-2 ">  <h1 className="text-xl font-semibold mb-4 ml-1 uppercase ">
          Address
          </h1></div>
        <div className="w-[50%] flex flex-row justify-end pr-3"><div onClick={handleEdit3}><BiPencil /></div></div>
       </div>
       {
        !onEdit3 ? ( <div className="flex flex-row items-center justify-around">
        <div><div>currentAddress</div><div>-</div></div>
        <div><div>PermanentAddress</div><div>-</div></div>
       </div>):( <My_address/>)
       }
      

       
      </div>
      <div className="w-[44%] bg-slate-50 pt-2
        mt-2">
        <SocialMediaLinks/>
      </div>
    </div>
  );
};
