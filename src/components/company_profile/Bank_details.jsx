// import React, { useState } from 'react'
// import { AiFillPlusCircle } from "react-icons/ai";
// export const Bank_details = () => {

//     cosnt [showform  , setShowForm] = useState(false);

// const handleForm =()=>{
//     if(showform == true){
//         setShowForm(false);
//     }
//     else{
//         setShowForm(true);
//     }
// }
//   return (
//     <div className='flex flex-col'>
//        <div>Bank Account</div>
//        <div>
//        <button
//        onClick={handleForm}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//         </button>

//         {
//              showform && (
//                 <div className='flex flex-col '>
//                     <form action="">
//                     <div>

//              <input type="text" name='name' placeholder='Account Title' />
//                     </div>
//               <div className='flex flex-row items-center justify-around'>
//                 <div><input type="text" placeholder='Bank Name' /></div>
//                 <div><input type="text" placeholder='city' /></div>
//                 <div><input type="text" placeholder='Branch Name' /></div>
//               </div>
//               <div  className='flex flex-row items-center justify-around'>
//                 <div><input type="text" name="" id="" placeholder='Ifsc Code'/></div>
//                 <div>
//                     <select name="" id="">
//                         <option value="">Account type</option>
//                         <option value="current">Current Account</option>
//                         <option value="fixed_deposite">Fixed deposite</option>
//                     </select>
//                 </div>
//                 <div className="flex flex-row ">
//     <div onClick={handleForm} class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2  hover:scale-105 border border-gray-300">
//     <RxCross2 class="text-black text-sm font-semibold" />
//     <button  class="text-black text-sm font-semibold">CANCEL</button>
// </div>
// <div class="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//     <AiOutlineCheck class="text-xl" />
//     <button type="submit" class="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
// </div>
//     </div>
//               </div>
//               <div></div>
//                     </form>

//                 </div>
//              )
//         }

//        </div>
//     </div>
//   )
// }
// import React, { useState } from 'react';
// import { AiFillPlusCircle, AiOutlineCheck } from 'react-icons/ai';

// export const Bank_details = () => {
//   const [showform, setShowForm] = useState(false);

//   const handleForm = () => {
//     setShowForm(!showform); // Toggle the state value
//   };

//   return (
//     <div className='flex items-center justify-center'> <div className="flex flex-col w-[40%]">
//     <div>Bank Account</div>
//     <div>
//       <button
//         onClick={handleForm}
//         className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//       >
//         <AiFillPlusCircle /> <div className="text-xl">Add</div>
//       </button>

//       {showform && (
//         <div className="flex flex-col ">
//           <form action="">
//             <div>
//               <input type="text" name="name" placeholder="Account Title" />
//             </div>
//             <div className="flex flex-row items-center justify-around">
//               <div>
//                 <input type="text" placeholder="Bank Name" />
//               </div>
//               <div>
//                 <input type="text" placeholder="city" />
//               </div>
//               <div>
//                 <input type="text" placeholder="Branch Name" />
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-around">
//               <div>
//                 <input type="text" name="" id="" placeholder="Ifsc Code" />
//               </div>
//               <div>
//                 <select name="" id="">
//                   <option value="">Account type</option>
//                   <option value="current">Current Account</option>
//                   <option value="fixed_deposite">Fixed deposit</option>
//                 </select>
//               </div>
//               <div className="flex flex-row ">
//                 <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 hover:scale-105 border border-gray-300">
//                   <button onClick={handleForm} className="text-black text-sm font-semibold">
//                     CANCEL
//                   </button>
//                 </div>
//                 <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                   <AiOutlineCheck className="text-xl" />
//                   <button type="submit" className="text-white text-sm font-semibold pl-3 pr-3">
//                     SAVE
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   </div></div>

//   );
// };

import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineCheck } from "react-icons/ai";

export const Bank_details = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    accountTitle: "",
    bankName: "",
    city: "",
    branchName: "",
    ifscCode: "",
    accountType: "",
    accountNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform your logic to submit formData to your backend
    console.log("Form submitted:", formData);
    // Reset form fields
    setFormData({
      accountTitle: "",
      bankName: "",
      city: "",
      branchName: "",
      ifscCode: "",
      accountType: "",
      accountNumber: "",
    });
    // Hide the form after submission
    setShowForm(false);
  };

  const handleForm = () => {
    setShowForm(!showForm); // Toggle the state value
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-3 flex flex-col w-[44%] bg-slate-50"  >
        <div className="text-xl font-bold mb-4">Bank Account</div>
        <div>
          <button
            onClick={handleForm}
            className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
          >
            <AiFillPlusCircle className="mr-1" />
            <div>Add</div>
          </button>
          {showForm && (
            <div className="mt-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="accountTitle"
                    placeholder="Account Title"
                    className="border-b border-gray-700 w-full p-2"
                    value={formData.accountTitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                  <input
                    type="text"
                    name="bankName"
                    placeholder="Bank Name"
                    className="border-b border-gray-700  p-2 w-1/3 mr-2"
                    value={formData.bankName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className="border-b border-gray-700  p-2 w-1/3 mr-2"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="branchName"
                    placeholder="Branch Name"
                    className="border-b border-gray-700  p-2 w-1/3"
                    value={formData.branchName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-row items-center justify-between mb-4">
                  <input
                    type="text"
                    name="ifscCode"
                    placeholder="IFSC Code"
                    className="border-b border-gray-700  p-2 w-1/3 mr-2"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                  />

                  <select
                    name="accountType"
                    className="border-b border-gray-700 p-2 w-1/3 mr-2"
                    value={formData.accountType}
                    onChange={handleInputChange}
                  >
                    <option value="">Account type</option>
                    <option value="current">Current Account</option>
                    <option value="fixed_deposite">Fixed deposit</option>
                  </select>
                  <input
                    type="text"
                    name="accountNumber"
                    placeholder="Account Number"
                    className="border-b border-gray-700  p-2 w-1/3 mr-2"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-end gap-2 pr-3">
                  <button
                    onClick={handleForm}
                    className="text-black text-sm font-semibold border border-gray-300 rounded-md p-2 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <div className="bg-blue-600 flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 hover:shadow-md">
                    <AiOutlineCheck className="text-xl mr-1" />
                    <button type="submit" className="text-sm font-semibold">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bank_details;
