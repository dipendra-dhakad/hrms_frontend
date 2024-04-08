// // import React from 'react'

// // export const Personal_Profile = () => {
// //   return (
// //     <div className='w-[150px] h-[150px] rounded-full '>   
// //         <form action=" "> <input type="file" placeholder='upload profile image' /></form>
// //     </div>
// //   )
// // }


// import React from 'react';
// import { RiAddFill } from 'react-icons/ri';

// export const Personal_Profile = () => {
//   const handleFileUpload = (e) => {
//     // Handle file upload logic here
//     const file = e.target.files[0];
//     console.log('Uploaded file:', file);
//   };

//   return (
//     <div className="flex items-center justify-center">
//       <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
//         <img
//           src="/default_profile_image.jpg" // You can provide a default image source here
//           alt="Profile"
//           className="w-full h-full object-cover"
//         />
//         <label
//           htmlFor="upload-profile-image"
//           className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-200"
//         >
//           <RiAddFill className="text-blue-500 text-3xl" />
//           <input
//             type="file"
//             id="upload-profile-image"
//             accept="image/*"
//             className="hidden"
//             onChange={handleFileUpload}
//           />
//         </label>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import { RiAddFill } from 'react-icons/ri';

export const Personal_Profile = () => {
  const handleFileUpload = (e) => {
    // Handle file upload logic here
    const file = e.target.files[0];
    console.log('Uploaded file:', file);
  };

  return (
    <div className="flex items-center justify-center rounded-full bg-zinc-100">
      <div className=" w-[100px] h-[100px] rounded-full overflow-hidden flex items-center justify-center">
      
        <label
          htmlFor="upload-profile-image"
          className="absolute  bg-white rounded-full p-2 cursor-pointer hover:bg-gray-200"
        >
          <RiAddFill className="text-blue-500 text-5xl" />
          <input
            type="file"
            id="upload-profile-image"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
};
