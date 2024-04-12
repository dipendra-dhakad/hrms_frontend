// import React from 'react'

// export const EducationForm = ({handleFormOpen}) => {
//   return (
//     <div className=' w-full'>
//         <form action="">
//             <div className='flex flex-col'>
//             <div>
//                 <select name="" id="">
//                     <option value="">Qualification Type</option>
//                     <option value="graduation">Graduation</option>
//                     <option value="postGraduation">Post Graduation</option>
//                     <option value="doctorate">Doctorate</option>
//                     <option value="diploma">Diploma</option>
//                     <option value="preUniversity">Pre University</option>
//                     <option value="otherEducation">Other Education</option>
//                     <option value="certificate">Certificate</option>
//                 </select>
//             </div>
//             <div className='flex flex-row justify-around'>
//                 <div className='flex flex-col'>
//                     <label htmlFor="">Course Name</label>
//                     <input type="text"  />
//                 </div>
//                 <div>
//                     <select name="" id="">
//                       <option value="">Course Type</option>
//                       <option value="fullTime">Full Tyme</option>
//                       <option value="partTime">Part Time</option>
//                       <option value="correspondence">Correspondence</option>
//                       <option value="certificate">Certificate</option>
//                     </select>
//                 </div>
//                 <div className='flex flex-col'> 
//                     <label htmlFor="">Stream</label>
//                     <input type="text"  />
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <label htmlFor="">Course Start Date</label>
//                     <input type="date" />
//                 </div>
//                 <div>
//                     <label htmlFor="">Course End Date</label>
//                     <input type="date" />
//                 </div>
//                 <div>
//                 <label htmlFor="">College Name</label>
//                     <input type="text"  />
//                 </div>
//             </div>
//             <div>
//                 <label htmlFor="">University Name</label>
//                 <input type="text" />
//             </div>
//             <div className="flex justify-end mt-2">
//             <button
//               type="button"
//               onClick={handleFormOpen}
//               className="bg-red-600 text-white px-3 py-1 rounded mr-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSave}
//               className="bg-blue-600 text-white px-3 py-1 rounded"
//             >
//               Save
//             </button>
//           </div>
//             </div>
        
//         </form>
//     </div>
//   )
// }
// import React from 'react';

// export const EducationForm = ({ handleFormOpen }) => {
//   const handleSave = () => {
//     // This is a placeholder function for handling the save action.
//     // You should implement the logic to save the education details.
//     console.log('Education details saved!');
//   };

//   return (
//     <div className='w-full'>
//       <form action=''>
//         <div className='flex flex-col gap-3'>
//           <div className='border-gray-700 border-b pl-11 mx-5 '>
//             <select name='' id=''>
//               <option value=''>Qualification Type</option>
//               <option value='graduation'>Graduation</option>
//               <option value='postGraduation'>Post Graduation</option>
//               <option value='doctorate'>Doctorate</option>
//               <option value='diploma'>Diploma</option>
//               <option value='preUniversity'>Pre University</option>
//               <option value='otherEducation'>Other Education</option>
//               <option value='certificate'>Certificate</option>
//             </select>
//           </div>
//           <div className='flex flex-row justify-around pl-1'>
//             <div className='flex flex-col'>
//               <label htmlFor=''>Course Name</label>
//               <input type='text' className='border-b border-gray-700' />
//             </div>
//             <div>
//               <select name='' id='' className='border-b border-gray-700'>
//                 <option value=''>Course Type</option>
//                 <option value='fullTime'>Full Time</option>
//                 <option value='partTime'>Part Time</option>
//                 <option value='correspondence'>Correspondence</option>
//                 <option value='certificate'>Certificate</option>
//               </select>
//             </div>
//             <div className='flex flex-col'>
//               <label htmlFor=''>Stream</label>
//               <input type='text' className='border-b border-gray-700' />
//             </div>
//           </div>
//           <div className='flex flex-row justify-around'>
//             <div className='flex flex-col'>
//               <label htmlFor=''>Course Start Date</label>
//               <input type='date' className='border-b border-gray-700' />
//             </div>
//             <div className='flex flex-col'>
//               <label htmlFor=''>Course End Date</label>
//               <input type='date' className='border-b border-gray-700' />
//             </div>
//             <div className='flex flex-col'>
//               <label htmlFor=''>College Name</label>
//               <input type='text' className='border-b border-gray-700' />
//             </div>
//           </div>
//           <div className='flex flex-col pl-11 w-[40%]'>
//             <label htmlFor=''>University Name</label>
//             <input type='text' className='border-b border-gray-700'/>
//           </div>
//           <div className='flex justify-end mt-2'>
//             <button
//               type='button'
//               onClick={handleFormOpen}
//               className='bg-red-600 text-white px-3 py-1 rounded mr-2'
//             >
//               Cancel
//             </button>
//             <button
//               type='button'
//               onClick={handleSave}
//               className='bg-blue-600 text-white px-3 py-1 rounded'
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };
// EducationForm.js
import React, { useState } from 'react';
import axios from 'axios';

export const EducationForm = ({ handleFormOpen }) => {
  const [formData, setFormData] = useState({
    qualificationType: '',
    courseName: '',
    courseType: '',
    stream: '',
    courseStartDate: '',
    courseEndDate: '',
    collegeName: '',
    universityName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    axios.post('your-backend-url', formData)
      .then(response => {
        console.log('Education details saved!', response.data);
        // Additional logic after successful save
      })
      .catch(error => {
        console.error('Error saving education details:', error);
        // Handle error
      });
  };

  return (
    <div className='w-full p-2'>
      <form action=''>
        <div className='flex flex-col gap-3'>
          <div className='border-gray-700 border-b pl-11 mx-5'>
            <select name='qualificationType' value={formData.qualificationType} onChange={handleChange}>
              <option value=''>Qualification Type</option>
              <option value='graduation'>Graduation</option>
              <option value='postGraduation'>Post Graduation</option>
              <option value='doctorate'>Doctorate</option>
              <option value='diploma'>Diploma</option>
              <option value='preUniversity'>Pre University</option>
              <option value='otherEducation'>Other Education</option>
              <option value='certificate'>Certificate</option>
            </select>
          </div>
          <div className='flex flex-row justify-around pl-1'>
            <div className='flex flex-col'>
              <label htmlFor='courseName'>Course Name</label>
              <input type='text' name='courseName' value={formData.courseName} onChange={handleChange} className='border-b border-gray-700' />
            </div>
            <div>
              <select name='courseType' value={formData.courseType} onChange={handleChange} className='border-b border-gray-700'>
                <option value=''>Course Type</option>
                <option value='fullTime'>Full Time</option>
                <option value='partTime'>Part Time</option>
                <option value='correspondence'>Correspondence</option>
                <option value='certificate'>Certificate</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='stream'>Stream</label>
              <input type='text' name='stream' value={formData.stream} onChange={handleChange} className='border-b border-gray-700' />
            </div>
          </div>
          <div className='flex flex-row justify-around'>
            <div className='flex flex-col'>
              <label htmlFor='courseStartDate'>Course Start Date</label>
              <input type='date' name='courseStartDate' value={formData.courseStartDate} onChange={handleChange} className='border-b border-gray-700' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='courseEndDate'>Course End Date</label>
              <input type='date' name='courseEndDate' value={formData.courseEndDate} onChange={handleChange} className='border-b border-gray-700' />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='collegeName'>College Name</label>
              <input type='text' name='collegeName' value={formData.collegeName} onChange={handleChange} className='border-b border-gray-700' />
            </div>
          </div>
          <div className='flex flex-col pl-11 w-[40%]'>
            <label htmlFor='universityName'>University Name</label>
            <input type='text' name='universityName' value={formData.universityName} onChange={handleChange} className='border-b border-gray-700'/>
          </div>
          <div className='flex justify-end mt-2'>
            <button
              type='button'
              onClick={handleFormOpen}
              className='bg-red-600 text-white px-3 py-1 rounded mr-2'
            >
              Cancel
            </button>
            <button
              type='button'
              onClick={handleSave}
              className='bg-blue-600 text-white px-3 py-1 rounded'
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
