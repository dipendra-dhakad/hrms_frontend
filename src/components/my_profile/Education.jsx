// import React, { useState } from 'react'
// import { AiFillPlusCircle } from "react-icons/ai";
// import { EducationForm } from './education/EducationForm';

// export const Education = () => {
//   const [openForm,setOpenForm] = useState(false);
  
//   const handleFormOpen = () =>{
//     setOpenForm(!openForm);
//   }

//   return (
//    <div className='flex  w-[100vw] items-center justify-center'>
//      <div className='bg-white shadow-xl w-[40%]'>
  
//   <div className='border-b border-r-gray-600 pl-3 p-2 mt-1'><h1 className='uppercase'>Education Info</h1></div>

//   <div className="flex flex-row items-center ml-4 text-blue-500">
//             <button onClick={handleFormOpen}  className="text-3xl  font-bold cursor-pointer p-2">
//               <AiFillPlusCircle />
//             </button>
//             <h1 className="text-md  font-medium ">Add</h1>
//   </div>
//   <EducationForm handleFormOpen={handleFormOpen()}/>
// </div>
//    </div>
//   )
// }
// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";
// import { EducationForm } from './education/EducationForm';
// import { EducationDetails } from './education/EducationDetails';

// export const Education = () => {
//   const [openForm, setOpenForm] = useState(false);
  
//   const handleFormOpen = () => {
//     setOpenForm(!openForm);
//   }

//   return (
//     <div className='flex w-[100vw] items-center justify-center'>
//       <div className='bg-white shadow-xl w-[40%]'>
//         <div className='border-b border-r-gray-600 pl-3 p-2 mt-1'><h1 className='uppercase'>Education Info</h1></div>
//         <div className="flex flex-row items-center ml-4 text-blue-500">
//           <button onClick={handleFormOpen} className="text-3xl font-bold cursor-pointer p-2">
//             <AiFillPlusCircle />
//           </button>
//           <h1 className="text-md font-medium">Add</h1>
//         </div>
//         {openForm ? (<EducationForm handleFormOpen={handleFormOpen} />) : (
//           <EducationDetails/>
//         ) }
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";
import { EducationForm } from './education/EducationForm';
import { EducationDetails } from './education/EducationDetails';

export const Education = () => {
  const [openForm, setOpenForm] = useState(false);
  const [visitedBefore, setVisitedBefore] = useState(false);
  
  useEffect(() => {
    // Check if the user has visited before
    const hasVisitedBefore = sessionStorage.getItem('visitedBefore');
    if (hasVisitedBefore) {
      setVisitedBefore(true);
    } else {
      sessionStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  const handleFormOpen = () => {
    // Toggle the openForm state to open/close the form
    setOpenForm(!openForm);
  }

  return (
    <div className='flex w-[100vw] items-center justify-center'>
      <div className='bg-white shadow-xl w-[44%]'>
        <div className='border-b border-r-gray-600 pl-3 p-2 mt-1'><h1 className='uppercase'>Education Info</h1></div>
        <div className="flex flex-row items-center ml-4 text-blue-500">
          {/* Render the "+" icon only if the user has visited before */}
          {visitedBefore && (
            <button onClick={handleFormOpen} className="text-3xl font-bold cursor-pointer p-2">
              <AiFillPlusCircle />
            </button>
          )}
          <h1 className="text-md font-medium">Add</h1>
        </div>
        {/* Render the EducationForm component if openForm is true, otherwise render EducationDetails */}
        {openForm ? (<EducationForm handleFormOpen={handleFormOpen} />) : (
          <EducationDetails/>
        )}
      </div>
    </div>
  );
};
