



// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";

// export const Policies = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState(null);

//   const handleAddClick = () => {
//     setShowForm(true);
//   };

//   const handleCancelClick = () => {
//     setShowForm(false);
//     // Reset form fields
//     setTitle('');
//     setDescription('');
//     setFile(null);
//   };

//   const handleSaveClick = () => {
//     // Add logic to save policy
//     console.log('Title:', title);
//     console.log('Description:', description);
//     console.log('File:', file);
//     // Reset form fields
//     setTitle('');
//     setDescription('');
//     setFile(null);
//     setShowForm(false);
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <div className='w-[40%]'>
//         <div className="flex flex-row justify-between items-center border-b-[0.3px] p-2 border-gray-300">
//           <h1 className="pl-3 text-medium font-medium uppercase">Company Policies</h1>
//         </div>
//         {showForm ? (
//           <form className="p-4 border border-gray-300 rounded-md">
//             <h2 className="text-lg font-medium mb-4">Add Policy</h2>
//             <div className="mb-4">
//               <label htmlFor="titleInput" className="block font-medium mb-1">Title</label>
//               <input
//                 id="titleInput"
//                 type="text"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 placeholder="Enter title"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="descriptionTextarea" className="block font-medium mb-1">Description</label>
//               <textarea
//                 id="descriptionTextarea"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows={4}
//                 placeholder="Enter description"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="fileInput" className="block font-medium mb-1">Upload File</label>
//               <input
//                 id="fileInput"
//                 type="file"
//                 onChange={(e) => setFile(e.target.files[0])}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>
//             <div className="flex justify-end">
//               <button type="button" onClick={handleCancelClick} className="mr-2 px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">Cancel</button>
//               <button type="button" onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
//             </div>
//           </form>
//         ) : (
//           <>
//             <div>No policies uploaded yet!</div>
//             <div className="flex justify-start p-2">
//               <button onClick={handleAddClick} className="text-xl font-bold cursor-pointer p-2 text-blue-500 flex items-center">
//                 <AiFillPlusCircle /> <div className='text-base'>Add</div>
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";

export const Policies = () => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleCancelClick = () => {
    setShowForm(false);
    // Reset form fields
    setTitle('');
    setDescription('');
    setFile(null);
  };

  const handleSaveClick = () => {
    // Add logic to save policy
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('File:', file);
    // Reset form fields
    setTitle('');
    setDescription('');
    setFile(null);
    setShowForm(false);
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-[40%]'>
        <div className="bg-gray-200 rounded-t-lg p-4">
          <h1 className="text-xl font-bold uppercase">Company Policies</h1>
        </div>
        {showForm ? (
          <form className="bg-white rounded-b-lg shadow-lg p-4">
            <h2 className="text-lg font-medium mb-4">Add Policy</h2>
            <div className="mb-4">
              <label htmlFor="titleInput" className="block font-medium mb-1">Title</label>
              <input
                id="titleInput"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="descriptionTextarea" className="block font-medium mb-1">Description</label>
              <textarea
                id="descriptionTextarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Enter description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fileInput" className="block font-medium mb-1">Upload File</label>
              <input
                id="fileInput"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={handleCancelClick} className="mr-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Cancel</button>
              <button type="button" onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
            </div>
          </form>
        ) : (
          <div className="bg-gray-100 rounded-b-lg p-4">
            <div className="mb-4">No policies uploaded yet!</div>
            <div className="flex justify-start">
              <button onClick={handleAddClick} className="text-lg font-bold cursor-pointer flex items-center">
                <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add Policy</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
