// import React from 'react'
// import { AiFillPlusCircle } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineCheck } from "react-icons/ai";
// export const Designation = () => {
//   return (
//    <div className='flex items-center justify-center'>
//      <div >

// <div className='flex  border-b  border-blue-500 w-[40vw] p-1'>
//  <div className='px-2'><button className='px-2 py-2 '>Designations</button></div>
//  <div className='px-1'><button className='px-2 py-2 '>Grade</button></div>
// </div>
// <div>
//   <div className=' bg-slate-50  mt-5 pt-3 shadow-xl'>
//     <div className='flex flex-row p-2  border-b border-gray-300'>
//       <div className='w-[50%] flex items-center pl-3'>Grade</div>
//       <div className='w-[50%] flex items-center justify-center'>Employees</div>
//     </div>
//     <div>
//        <div>
//        <input type="text" placeholder='Grade N' />
//        </div>
//       <button  className="text-xl pl-4 font-bold cursor-pointer p-2  text-blue-500  flex items-center ">
//                   <AiFillPlusCircle /> <div className=' text-base '>Add</div>
//                 </button></div>
//     <div></div>
//     <div>
//     <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//     <div className="flex flex-row w-[300px]">
//     <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//     <RxCross2 class="text-black text-sm font-semibold" />
//     <button  class="text-black text-sm font-semibold">CANCEL</button>
// </div>
// <div class="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//     <AiOutlineCheck class="text-xl" />
//     <button type="submit" class="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
// </div>
//     </div>
//   </div>
//     </div>
//   </div>
// </div>
// </div>
//    </div>
//   )
// }

// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineCheck } from "react-icons/ai";

// export const Designation = () => {
//   const [gradeFields, setGradeFields] = useState([{ id: 0, value: '' }]);

//   const handleAddGradeField = () => {
//     const newGradeFields = [...gradeFields];
//     newGradeFields.push({ id: newGradeFields.length, value: '' });
//     setGradeFields(newGradeFields);
//   };

//   const handleRemoveGradeField = (id) => {
//     const newGradeFields = gradeFields.filter((field) => field.id !== id);
//     setGradeFields(newGradeFields);
//   };

//   const handleFormSubmit = () => {
//     // Add logic to handle form submission (e.g., saving grade names)
//     console.log("Grade fields:", gradeFields);
//     // Reset form state
//     setGradeFields([{ id: 0, value: '' }]);
//   };

//   const [designationFields, setDesignationFields] = useState([{ id: 0, value: '' }]);

//   const handleAddDesignationField = () => {
//     const newDesignationFields = [...designationFields];
//     newDesignationFields.push({ id: newDesignationFields.length, value: '' });
//     setDesignationFields(newDesignationFields);
//   };

//   const handleRemoveDesignationField = (id) => {
//     const newDesignationFields = designationFields.filter((field) => field.id !== id);
//     setDesignationFields(newDesignationFields);
//   };

//   const handleFormSubmit2 = () => {
//     // Add logic to handle form submission (e.g., saving grade names)
//     console.log("Designation fields:", designationFields);
//     // Reset form state
//     setDesignationFields([{ id: 0, value: '' }]);
//   };

//   const [btn , setBtn] = useState(false);

//   const handleVisibleForm = () =>{
//     if(btn === true){
//       setBtn(false);
//     }
//     else{
//       setBtn(true)
//     }
//   }

//   return (
//     <div className='flex items-center justify-center'>
//       <div>
//         <div className='flex border-b border-blue-500 w-[40vw] p-1'>
//           <div className='px-2'><button onClick={handleVisibleForm } className='px-2 py-2'>Designations</button></div>
//           <div className='px-1'><button onClick={handleVisibleForm } className='px-2 py-2'>Grade</button></div>
//         </div>

// {
//   btn ? ( <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//   <div className='flex flex-row p-2 border-b border-gray-300'>
//     <div className='w-[50%] flex items-center pl-3'>Designation</div>
//     <div className='w-[50%] flex items-center justify-center'>Employees</div>
//   </div>
//   {gradeFields.map((field) => (
//     <div key={field.id} className='flex items-center pl-3'>
//       <input
//         type="text"
//         placeholder='designation Name'
//         value={field.value}
//         onChange={(e) => {
//           const newValue = e.target.value;
//           setDesignationFields(prevFields =>
//             prevFields.map(prevField =>
//               prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//             )
//           );
//         }}
//         className="border border-gray-300 rounded px-2 py-1 mr-2"
//       />
//       <button
//         onClick={() => handleRemoveDesignationField(field.id)}
//         className="text-xl font-bold cursor-pointer p-2 text-red-500"
//       >
//         <RxCross2 />
//       </button>
//     </div>
//   ))}
//   <div className="flex justify-start p-2">
//     <button
//       onClick={handleAddDesignationField}
//       className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//     >
//       <AiFillPlusCircle /> <div className='text-base'>Add</div>
//     </button>
//   </div>
//   <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//     <div className="flex flex-row w-[300px]">
//       <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//         <RxCross2 className="text-black text-sm font-semibold" />
//         <button className="text-black text-sm font-semibold">CANCEL</button>
//       </div>
//       <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//         <AiOutlineCheck className="text-xl" />
//         <button onClick={handleFormSubmit2} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//       </div>
//     </div>
//   </div>
// </div>) : (<div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//           <div className='flex flex-row p-2 border-b border-gray-300'>
//             <div className='w-[50%] flex items-center pl-3'>Grade</div>
//             <div className='w-[50%] flex items-center justify-center'>Employees</div>
//           </div>
//           {gradeFields.map((field) => (
//             <div key={field.id} className='flex items-center pl-3'>
//               <input
//                 type="text"
//                 placeholder='Grade Name'
//                 value={field.value}
//                 onChange={(e) => {
//                   const newValue = e.target.value;
//                   setGradeFields(prevFields =>
//                     prevFields.map(prevField =>
//                       prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                     )
//                   );
//                 }}
//                 className="border border-gray-300 rounded px-2 py-1 mr-2"
//               />
//               <button
//                 onClick={() => handleRemoveGradeField(field.id)}
//                 className="text-xl font-bold cursor-pointer p-2 text-red-500"
//               >
//                 <RxCross2 />
//               </button>
//             </div>
//           ))}
//           <div className="flex justify-start p-2">
//             <button
//               onClick={handleAddGradeField}
//               className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//             >
//               <AiFillPlusCircle /> <div className='text-base'>Add</div>
//             </button>
//           </div>
//           <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//             <div className="flex flex-row w-[300px]">
//               <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//                 <RxCross2 className="text-black text-sm font-semibold" />
//                 <button className="text-black text-sm font-semibold">CANCEL</button>
//               </div>
//               <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                 <AiOutlineCheck className="text-xl" />
//                 <button onClick={handleFormSubmit} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//               </div>
//             </div>
//           </div>
//         </div>)
// }

//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineCheck } from "react-icons/ai";

// export const Designation = () => {
//   const [designationFields, setDesignationFields] = useState([{ id: 0, value: '' }]);
//   const [gradeFields, setGradeFields] = useState([{ id: 0, value: '' }]);
//   const [btn, setBtn] = useState(false);

//   const handleAddDesignationField = () => {
//     const newDesignationFields = [...designationFields];
//     newDesignationFields.push({ id: newDesignationFields.length, value: '' });
//     setDesignationFields(newDesignationFields);
//   };

//   const handleRemoveDesignationField = (id) => {
//     const newDesignationFields = designationFields.filter((field) => field.id !== id);
//     setDesignationFields(newDesignationFields);
//   };

//   const handleAddGradeField = () => {
//     const newGradeFields = [...gradeFields];
//     newGradeFields.push({ id: newGradeFields.length, value: '' });
//     setGradeFields(newGradeFields);
//   };

//   const handleRemoveGradeField = (id) => {
//     const newGradeFields = gradeFields.filter((field) => field.id !== id);
//     setGradeFields(newGradeFields);
//   };

//   const handleFormSubmitDesignation = () => {
//     console.log("Designation fields:", designationFields);
//     setDesignationFields([{ id: 0, value: '' }]);
//   };

//   const handleFormSubmitGrade = () => {
//     console.log("Grade fields:", gradeFields);
//     setGradeFields([{ id: 0, value: '' }]);
//   };

//   const handleVisibleForm = () => {
//     setBtn((prev) => !prev);
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div>
//         <div className='flex border-b border-blue-500 w-[40vw] p-1'>
//           <div className='px-2'><button onClick={handleVisibleForm} className='px-2 py-2'>Designations</button></div>
//           <div className='px-1'><button onClick={handleVisibleForm} className='px-2 py-2'>Grade</button></div>
//         </div>
//         { !btn ? (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3'>Designation</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {designationFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input

//                   type="text"
//                   placeholder='designation Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setDesignationFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border-b w-[50%] border-gray-400  rounded mt-1 px-2 py-1 mr-2"
//                 />
//                 <button
//                   onClick={() => handleRemoveDesignationField(field.id)}
//                   className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                 >
//                   <RxCross2 />
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddDesignationField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//               <div className="flex flex-row w-[300px]">
//                 <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//                   <RxCross2 className="text-black text-sm font-semibold" />
//                   <button className="text-black text-sm font-semibold">CANCEL</button>
//                 </div>
//                 <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                   <AiOutlineCheck className="text-xl" />
//                   <button onClick={handleFormSubmitDesignation} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3'>Grade</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {gradeFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input
//                   type="text"
//                   placeholder='Grade Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setGradeFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border border-gray-300 rounded px-2 py-1 mr-2"
//                 />
//                 <button
//                   onClick={() => handleRemoveGradeField(field.id)}
//                   className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                 >
//                   <RxCross2 />
//                 </button>
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddGradeField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//               <div className="flex flex-row w-[300px]">
//                 <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//                   <RxCross2 className="text-black text-sm font-semibold" />
//                   <button className="text-black text-sm font-semibold">CANCEL</button>
//                 </div>
//                 <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                   <AiOutlineCheck className="text-xl" />
//                   <button onClick={handleFormSubmitGrade} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineCheck } from "react-icons/ai";

// export const Designation = () => {
//   const [designationFields, setDesignationFields] = useState([]);
//   const [gradeFields, setGradeFields] = useState([]);
//   const [btn, setBtn] = useState(false);
//   const [showButtons, setShowButtons] = useState(false);

//   const handleAddDesignationField = () => {
//     const newDesignationFields = [...designationFields];
//     newDesignationFields.push({ id: newDesignationFields.length, value: '' });
//     setDesignationFields(newDesignationFields);
//     setShowButtons(true);
//   };

//   const handleRemoveDesignationField = (id) => {
//     const newDesignationFields = designationFields.filter((field) => field.id !== id);
//     setDesignationFields(newDesignationFields);
//   };

//   const handleAddGradeField = () => {
//     const newGradeFields = [...gradeFields];
//     newGradeFields.push({ id: newGradeFields.length, value: '' });
//     setGradeFields(newGradeFields);
//     setShowButtons(true);
//   };

//   const handleRemoveGradeField = (id) => {
//     const newGradeFields = gradeFields.filter((field) => field.id !== id);
//     setGradeFields(newGradeFields);
//   };

//   const handleFormSubmitDesignation = () => {
//     console.log("Designation fields:", designationFields);
//     setDesignationFields([]);
//     setShowButtons(false);
//   };

//   const handleFormSubmitGrade = () => {
//     console.log("Grade fields:", gradeFields);
//     setGradeFields([]);
//     setShowButtons(false);
//   };

//   const handleCancel = () => {
//     setDesignationFields([]);
//     setGradeFields([]);
//     setShowButtons(false);
//   };

//   const handleVisibleForm = () => {
//     setBtn((prev) => !prev);
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div>
//         <div className='flex border-b border-blue-500 w-[40vw] p-1'>
//           <div className='px-2'><button onClick={handleVisibleForm} className='px-2 py-2'>Designations</button></div>
//           <div className='px-1'><button onClick={handleVisibleForm} className='px-2 py-2'>Grade</button></div>
//         </div>
//         {!btn ? (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3 '>Designation</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {designationFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input
//                   type="text"
//                   placeholder='designation Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setDesignationFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border border-gray-300 rounded px-2 py-1 mr-2"
//                 />
//                 {showButtons && (
//                   <button
//                     onClick={() => handleRemoveDesignationField(field.id)}
//                     className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                   >
//                     <RxCross2 />
//                   </button>
//                 )}
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddDesignationField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             {showButtons && (
//               <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//                 <div className="flex flex-row w-[300px]">
//                   <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300" onClick={handleCancel}>
//                     <RxCross2 className="text-black text-sm font-semibold"  />
//                     <button  className="text-black text-sm font-semibold">CANCEL</button>
//                   </div>
//                   <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                     <AiOutlineCheck className="text-xl" />
//                     <button onClick={handleFormSubmitDesignation} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3'>Grade</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {gradeFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input
//                   type="text"
//                   placeholder='Grade Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setGradeFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border border-gray-300 rounded px-2 py-1 mr-2"
//                 />
//                 {showButtons && (
//                   <button
//                     onClick={() => handleRemoveGradeField(field.id)}
//                     className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                   >
//                     <RxCross2 />
//                   </button>
//                 )}
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddGradeField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             {showButtons && (
//               <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//                 <div className="flex flex-row w-[300px]">
//                   <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300 "  onClick={handleCancel}>
//                     <RxCross2 className="text-black text-sm font-semibold" />
//                     <button className="text-black text-sm font-semibold">CANCEL</button>
//                   </div>
//                   <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                     <AiOutlineCheck className="text-xl" />
//                     <button onClick={handleFormSubmitGrade} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineCheck } from "react-icons/ai";

// export const Designation = () => {
//   const [designationFields, setDesignationFields] = useState([]);
//   const [gradeFields, setGradeFields] = useState([]);
//   const [btn, setBtn] = useState(false);
//   const [showButtons, setShowButtons] = useState(false);
//   const [activeButton, setActiveButton] = useState(null);

//   const handleAddDesignationField = () => {
//     const newDesignationFields = [...designationFields];
//     newDesignationFields.push({ id: newDesignationFields.length, value: '' });
//     setDesignationFields(newDesignationFields);
//     setShowButtons(true);
//   };

//   const handleRemoveDesignationField = (id) => {
//     const newDesignationFields = designationFields.filter((field) => field.id !== id);
//     setDesignationFields(newDesignationFields);
//   };

//   const handleAddGradeField = () => {
//     const newGradeFields = [...gradeFields];
//     newGradeFields.push({ id: newGradeFields.length, value: '' });
//     setGradeFields(newGradeFields);
//     setShowButtons(true);
//   };

//   const handleRemoveGradeField = (id) => {
//     const newGradeFields = gradeFields.filter((field) => field.id !== id);
//     setGradeFields(newGradeFields);
//   };

//   const handleFormSubmitDesignation = () => {
//     console.log("Designation fields:", designationFields);
//     setDesignationFields([]);
//     setShowButtons(false);
//   };

//   const handleFormSubmitGrade = () => {
//     console.log("Grade fields:", gradeFields);
//     setGradeFields([]);
//     setShowButtons(false);
//   };

//   const handleCancel = () => {
//     setDesignationFields([]);
//     setGradeFields([]);
//     setShowButtons(false);
//   };

//   const handleVisibleForm = (type) => {
//     setBtn((prev) => !prev);
//     setActiveButton(type);
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div>
//         <div className='flex border-b border-blue-500 w-[40vw] p-1'>
//           <div className='px-2'><button onClick={() => handleVisibleForm('designation')} className={`px-2 py-2 ${activeButton === 'designation' ? 'bg-blue-500 text-white' : ''}`}>Designations</button></div>
//           <div className='px-1'><button onClick={() => handleVisibleForm('grade')} className={`px-2 py-2 ${activeButton === 'grade' ? 'bg-blue-500 text-white' : ''}`}>Grade</button></div>
//         </div>
//         {btn ? (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3'>Designation</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {designationFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input
//                   type="text"
//                   placeholder='designation Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setDesignationFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border border-gray-300 rounded px-2 py-1 mr-2"
//                 />
//                 {showButtons && (
//                   <button
//                     onClick={() => handleRemoveDesignationField(field.id)}
//                     className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                   >
//                     <RxCross2 />
//                   </button>
//                 )}
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddDesignationField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             {showButtons && (
//               <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//                 <div className="flex flex-row w-[300px]">
//                   <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//                     <RxCross2 className="text-black text-sm font-semibold" />
//                     <button onClick={handleCancel} className="text-black text-sm font-semibold">CANCEL</button>
//                   </div>
//                   <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                     <AiOutlineCheck className="text-xl" />
//                     <button onClick={handleFormSubmitDesignation} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className='bg-slate-50 mt-5 pt-3 shadow-xl'>
//             <div className='flex flex-row p-2 border-b border-gray-300'>
//               <div className='w-[50%] flex items-center pl-3'>Grade</div>
//               <div className='w-[50%] flex items-center justify-center'>Employees</div>
//             </div>
//             {gradeFields.map((field) => (
//               <div key={field.id} className='flex items-center pl-3'>
//                 <input
//                   type="text"
//                   placeholder='Grade Name'
//                   value={field.value}
//                   onChange={(e) => {
//                     const newValue = e.target.value;
//                     setGradeFields((prevFields) =>
//                       prevFields.map((prevField) =>
//                         prevField.id === field.id ? { ...prevField, value: newValue } : prevField
//                       )
//                     );
//                   }}
//                   className="border border-gray-300 rounded px-2 py-1 mr-2"
//                 />
//                 {showButtons && (
//                   <button
//                     onClick={() => handleRemoveGradeField(field.id)}
//                     className="text-xl font-bold cursor-pointer p-2 text-red-500"
//                   >
//                     <RxCross2 />
//                   </button>
//                 )}
//               </div>
//             ))}
//             <div className="flex justify-start p-2">
//               <button
//                 onClick={handleAddGradeField}
//                 className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
//               >
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//             {showButtons && (
//               <div className="h-[100px] flex flex-row items-center justify-end bg-white">
//                 <div className="flex flex-row w-[300px]">
//                   <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
//                     <RxCross2 className="text-black text-sm font-semibold" />
//                     <button onClick={handleCancel} className="text-black text-sm font-semibold">CANCEL</button>
//                   </div>
//                   <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
//                     <AiOutlineCheck className="text-xl" />
//                     <button onClick={handleFormSubmitGrade} className="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";

export const Designation = () => {
  const [designationFields, setDesignationFields] = useState([]);
  const [gradeFields, setGradeFields] = useState([]);
  const [btn, setBtn] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [activeButton, setActiveButton] = useState("designation"); // Set default active button

  const handleAddDesignationField = () => {
    const newDesignationFields = [...designationFields];
    newDesignationFields.push({ id: newDesignationFields.length, value: "" });
    setDesignationFields(newDesignationFields);
    setShowButtons(true);
  };

  const handleRemoveDesignationField = (id) => {
    const newDesignationFields = designationFields.filter(
      (field) => field.id !== id
    );
    setDesignationFields(newDesignationFields);
  };

  const handleAddGradeField = () => {
    const newGradeFields = [...gradeFields];
    newGradeFields.push({ id: newGradeFields.length, value: "" });
    setGradeFields(newGradeFields);
    setShowButtons(true);
  };

  const handleRemoveGradeField = (id) => {
    const newGradeFields = gradeFields.filter((field) => field.id !== id);
    setGradeFields(newGradeFields);
  };

  const handleFormSubmitDesignation = () => {
    console.log("Designation fields:", designationFields);
    setDesignationFields([]);
    setShowButtons(false);
  };

  const handleFormSubmitGrade = () => {
    console.log("Grade fields:", gradeFields);
    setGradeFields([]);
    setShowButtons(false);
  };

  const handleCancel = () => {
    setDesignationFields([]);
    setGradeFields([]);
    setShowButtons(false);
  };

  const handleVisibleForm = (type) => {
    setBtn((prev) => !prev);
    setActiveButton(type);
  };

  return (
    <div className="flex items-center justify-center mt-3 w-[100%]">
      <div className="sm:w-full xl:w-[44%] md:w-[44vw] w-[100%]">
        <div className='flex border-b border-blue-500 sm:w-full xl:w-[44%] md:w-[44vw] p-1'>
          <div className='px-2'><button onClick={() => handleVisibleForm('designation')} className={`px-2 py-2 rounded-md ${activeButton === 'designation' ? 'bg-blue-500 text-white' : ''}`}>Designations</button></div>
          <div className='px-1'><button onClick={() => handleVisibleForm('grade')} className={`px-2 py-2 rounded-md ${activeButton === 'grade' ? 'bg-blue-500 text-white' : ''}`}>Grade</button></div>
        </div>
        {!btn ? (
          <div className="bg-slate-50 mt-5 pt-3 shadow-xl">
            <div className="flex flex-row p-2 border-b border-gray-300">
              <div className="w-[50%] flex items-center pl-3">Designation</div>
              <div className="w-[50%] flex items-center justify-center">
                Employees
              </div>
            </div>
            {designationFields.map((field) => (
              <div key={field.id} className="flex items-center pl-3">
                <input
                  type="text"
                  placeholder="designation Name"
                  value={field.value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setDesignationFields((prevFields) =>
                      prevFields.map((prevField) =>
                        prevField.id === field.id
                          ? { ...prevField, value: newValue }
                          : prevField
                      )
                    );
                  }}
                  className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                {showButtons && (
                  <button
                    onClick={() => handleRemoveDesignationField(field.id)}
                    className="text-xl font-bold cursor-pointer p-2 text-red-500"
                  >
                    <RxCross2 />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-start p-2">
              <button
                onClick={handleAddDesignationField}
                className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
              >
                <AiFillPlusCircle /> <div className="text-base">Add</div>
              </button>
            </div>
            {showButtons && (
              <div className="h-[100px] flex flex-row items-center justify-end bg-white">
                <div className="flex flex-row w-[300px]">
                  <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
                    <RxCross2 className="text-black text-sm font-semibold" />
                    <button
                      onClick={handleCancel}
                      className="text-black text-sm font-semibold"
                    >
                      CANCEL
                    </button>
                  </div>
                  <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
                    <AiOutlineCheck className="text-xl" />
                    <button
                      onClick={handleFormSubmitDesignation}
                      className="text-white text-sm font-semibold pl-3 pr-3"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-slate-50 mt-5 pt-3 shadow-xl">
            <div className="flex flex-row p-2 border-b border-gray-300">
              <div className="w-[50%] flex items-center pl-3">Grade</div>
              <div className="w-[50%] flex items-center justify-center">
                Employees
              </div>
            </div>
            {gradeFields.map((field) => (
              <div key={field.id} className="flex items-center pl-3">
                <input
                  type="text"
                  placeholder="Grade Name"
                  value={field.value}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setGradeFields((prevFields) =>
                      prevFields.map((prevField) =>
                        prevField.id === field.id
                          ? { ...prevField, value: newValue }
                          : prevField
                      )
                    );
                  }}
                  className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
                {showButtons && (
                  <button
                    onClick={() => handleRemoveGradeField(field.id)}
                    className="text-xl font-bold cursor-pointer p-2 text-red-500"
                  >
                    <RxCross2 />
                  </button>
                )}
              </div>
            ))}
            <div className="flex justify-start p-2">
              <button
                onClick={handleAddGradeField}
                className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center"
              >
                <AiFillPlusCircle /> <div className="text-base">Add</div>
              </button>
            </div>
            {showButtons && (
              <div className="h-[100px] flex flex-row items-center justify-end bg-white">
                <div className="flex flex-row w-[300px]">
                  <div className="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
                    <RxCross2 className="text-black text-sm font-semibold" />
                    <button
                      onClick={handleCancel}
                      className="text-black text-sm font-semibold"
                    >
                      CANCEL
                    </button>
                  </div>
                  <div className="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
                    <AiOutlineCheck className="text-xl" />
                    <button
                      onClick={handleFormSubmitGrade}
                      className="text-white text-sm font-semibold pl-3 pr-3"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
