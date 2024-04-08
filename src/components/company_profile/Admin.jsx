// // import React from 'react'
// // import { AiFillPlusCircle } from "react-icons/ai";
// // export const Admin = () => {
// //   return (
// //     <div>

// //    <div>
// //     <div>CEO</div>
  
// //    <div>CEO is the head of the organization.

// // For Organisation Chart, addition of CEO is required

// // CEO is also the HR Admin.

// // CEO's permissions apply to all employees.
// // CEO can:

// // View all employee profile information
// // View sensitive employee information (such as PAN Card, IDs and salary)
// // Edit employee profiles
// // Edit, Upload and Approve Attendance and Leaves
// // Create and remove admins, and edit admin permissions
// // </div>
// // <div>
// // <div className="flex justify-start">
// //               <button  className="text-lg font-bold cursor-pointer flex items-center">
// //                 <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
// //               </button>
// //             </div>
// // </div>

// // <div>HR Admin</div>
  
// //   <div>HR Admin's permissions apply to all employees.

// // This admin can:

// // View all employee profile information
// // View sensitive employee information (such as PAN Card, IDs and salary)
// // Edit employee profiles
// // Edit, Upload and Approve Attendance and Leaves
// // Create and remove admins, and edit admin permissions
// // </div>
// // <div>
// // <div className="flex justify-start">
// //              <button  className="text-lg font-bold cursor-pointer flex items-center">
// //                <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
// //              </button>
// //            </div>
// // </div>
// // <div>HR EXECUTIVE</div>
  
// //   <div>HR Executive's permissions apply to all employees.

// // This admin can:

// // View all employee profile information (Non-payroll)
// // View sensitive employee information (such as PAN Card, IDs, DOB etc)
// // Add and edit employee profiles
// // Edit, Upload and Approve Attendance and Leaves
// // This Admin will not have any payroll access.
// // </div>
// // <div>
// // <div className="flex justify-start">
// //              <button  className="text-lg font-bold cursor-pointer flex items-center">
// //                <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
// //              </button>
// //            </div>
// // </div>

// //    <div></div>
  

// //    </div>
// //     </div>
// //   )
// // }
// import React, { useState } from 'react';
// import { AiFillPlusCircle } from "react-icons/ai";

// export const Admin = () => {
//   const [showCeoForm, setShowCeoForm] = useState(false);
//   const [showHrAdminForm, setShowHrAdminForm] = useState(false);
//   const [showHrExecutiveForm, setShowHrExecutiveForm] = useState(false);
//   const [employeeName, setEmployeeName] = useState('');

//   const handleAddCeoClick = () => {
//     setShowCeoForm(true);
//   };

//   const handleAddHrAdminClick = () => {
//     setShowHrAdminForm(true);
//   };

//   const handleAddHrExecutiveClick = () => {
//     setShowHrExecutiveForm(true);
//   };

//   const handleCancelClick = () => {
//     setShowCeoForm(false);
//     setShowHrAdminForm(false);
//     setShowHrExecutiveForm(false);
//     // Reset form fields
//     setEmployeeName('');
//   };

//   const handleSaveClick = () => {
//     // Add logic to find employee
//     console.log('Finding employee with name:', employeeName);
//     // Reset form fields
//     setEmployeeName('');
//     setShowCeoForm(false);
//     setShowHrAdminForm(false);
//     setShowHrExecutiveForm(false);
//   };

//   return (
//     <div className='flex flex-col items-center justify-center'>
//       <div className='w-[40%] flex flex-col'>
//         <div>CEO</div>
//         <div>
//           CEO is the head of the organization.
//           For Organisation Chart, addition of CEO is required.
//           CEO is also the HR Admin.
//           CEO's permissions apply to all employees.
//           CEO can:
//           <ul>
//             <li>View all employee profile information</li>
//             <li>View sensitive employee information (such as PAN Card, IDs and salary)</li>
//             <li>Edit employee profiles</li>
//             <li>Edit, Upload and Approve Attendance and Leaves</li>
//             <li>Create and remove admins, and edit admin permissions</li>
//           </ul>
//         </div>
//         <div className="flex justify-start">
//           <button onClick={handleAddCeoClick} className="text-lg font-bold cursor-pointer flex items-center">
//             <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
//           </button>
//         </div>
//       </div>

//       {showCeoForm && (
//         <div className="mt-4">
//           <h2 className="text-lg font-bold mb-2">Find CEO Employee</h2>
//           <input
//             type="text"
//             value={employeeName}
//             onChange={(e) => setEmployeeName(e.target.value)}
//             placeholder="Enter CEO employee name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
//           />
//           <div className="flex justify-end">
//             <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
//             <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
//           </div>
//         </div>
//       )}

//       <div>
//         <div>HR Admin</div>
//         <div>
//           HR Admin's permissions apply to all employees.
//           This admin can:
//           <ul>
//             <li>View all employee profile information</li>
//             <li>View sensitive employee information (such as PAN Card, IDs and salary)</li>
//             <li>Edit employee profiles</li>
//             <li>Edit, Upload and Approve Attendance and Leaves</li>
//             <li>Create and remove admins, and edit admin permissions</li>
//           </ul>
//         </div>
//         <div className="flex justify-start">
//           <button onClick={handleAddHrAdminClick} className="text-lg font-bold cursor-pointer flex items-center">
//             <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
//           </button>
//         </div>
//       </div>

//       {showHrAdminForm && (
//         <div className="mt-4">
//           <h2 className="text-lg font-bold mb-2">Find HR Admin Employee</h2>
//           <input
//             type="text"
//             value={employeeName}
//             onChange={(e) => setEmployeeName(e.target.value)}
//             placeholder="Enter HR Admin employee name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
//           />
//           <div className="flex justify-end">
//             <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
//             <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
//           </div>
//         </div>
//       )}

//       <div>
//         <div>HR EXECUTIVE</div>
//         <div>
//           HR Executive's permissions apply to all employees.
//           This admin can:
//           <ul>
//             <li>View all employee profile information (Non-payroll)</li>
//             <li>View sensitive employee information (such as PAN Card, IDs, DOB etc)</li>
//             <li>Add and edit employee profiles</li>
//             <li>Edit, Upload and Approve Attendance and Leaves</li>
//             <li>This Admin will not have any payroll access</li>
//           </ul>
//         </div>
//         <div className="flex justify-start">
//           <button onClick={handleAddHrExecutiveClick} className="text-lg font-bold cursor-pointer flex items-center">
//             <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add</span>
//           </button>
//         </div>
//       </div>

//       {showHrExecutiveForm && (
//         <div className="mt-4">
//           <h2 className="text-lg font-bold mb-2">Find HR Executive Employee</h2>
//           <input
//             type="text"
//             value={employeeName}
//             onChange={(e) => setEmployeeName(e.target.value)}
//             placeholder="Enter HR Executive employee name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
//           />
//           <div className="flex justify-end">
//             <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
//             <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useState } from 'react';
import { AiFillPlusCircle } from "react-icons/ai";

export const Admin = () => {
  const [showCeoForm, setShowCeoForm] = useState(false);
  const [showHrAdminForm, setShowHrAdminForm] = useState(false);
  const [showHrExecutiveForm, setShowHrExecutiveForm] = useState(false);
  const [employeeName, setEmployeeName] = useState('');

  const handleAddCeoClick = () => {
    setShowCeoForm(true);
    setShowHrAdminForm(false);
    setShowHrExecutiveForm(false);
  };

  const handleAddHrAdminClick = () => {
    setShowCeoForm(false);
    setShowHrAdminForm(true);
    setShowHrExecutiveForm(false);
  };

  const handleAddHrExecutiveClick = () => {
    setShowCeoForm(false);
    setShowHrAdminForm(false);
    setShowHrExecutiveForm(true);
  };

  const handleCancelClick = () => {
    setShowCeoForm(false);
    setShowHrAdminForm(false);
    setShowHrExecutiveForm(false);
    setEmployeeName('');
  };

  const handleSaveClick = () => {
    console.log('Finding employee with name:', employeeName);
    setEmployeeName('');
    setShowCeoForm(false);
    setShowHrAdminForm(false);
    setShowHrExecutiveForm(false);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[40%] flex flex-col'>
        <div className="bg-gray-200 rounded-t-lg p-4">
          <h1 className="text-xl font-bold uppercase">Company Admin</h1>
        </div>

        {/* CEO Form */}
        {showCeoForm && (
          <div className="mt-4 bg-white rounded-b-lg shadow-lg p-4">
            <h2 className="text-lg font-medium mb-2">Find CEO Employee</h2>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter CEO employee name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <div className="flex justify-end">
              <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
              <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        )}

        {/* HR Admin Form */}
        {showHrAdminForm && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-medium mb-2">Find HR Admin Employee</h2>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter HR Admin employee name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <div className="flex justify-end">
              <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
              <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        )}

        {/* HR Executive Form */}
        {showHrExecutiveForm && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-medium mb-2">Find HR Executive Employee</h2>
            <input
              type="text"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter HR Executive employee name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
            />
            <div className="flex justify-end">
              <button onClick={handleCancelClick} className="px-4 py-2 mr-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">Cancel</button>
              <button onClick={handleSaveClick} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Save</button>
            </div>
          </div>
        )}

        {/* Buttons to show forms */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <div>CEO</div>
          <div>
            CEO is the head of the organization.
            For Organisation Chart, addition of CEO is required.
            CEO is also the HR Admin.
            CEO's permissions apply to all employees.
            CEO can:
            <ul>
              <li>View all employee profile information</li>
              <li>View sensitive employee information (such as PAN Card, IDs and salary)</li>
              <li>Edit employee profiles</li>
              <li>Edit, Upload and Approve Attendance and Leaves</li>
              <li>Create and remove admins, and edit admin permissions</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <button onClick={handleAddCeoClick} className="text-lg font-bold cursor-pointer flex items-center">
              <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add CEO</span>
            </button>
          </div>
        </div>

        {/* HR Admin */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <div>HR Admin</div>
          <div>
            HR Admin's permissions apply to all employees.
            This admin can:
            <ul>
              <li>View all employee profile information</li>
              <li>View sensitive employee information (such as PAN Card, IDs and salary)</li>
              <li>Edit employee profiles</li>
              <li>Edit, Upload and Approve Attendance and Leaves</li>
              <li>Create and remove admins, and edit admin permissions</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <button onClick={handleAddHrAdminClick} className="text-lg font-bold cursor-pointer flex items-center">
              <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add HR Admin</span>
            </button>
          </div>
        </div>

        {/* HR Executive */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <div>HR EXECUTIVE</div>
          <div>
            HR Executive's permissions apply to all employees.
            This admin can:
            <ul>
              <li>View all employee profile information (Non-payroll)</li>
              <li>View sensitive employee information (such as PAN Card, IDs, DOB etc)</li>
              <li>Add and edit employee profiles</li>
              <li>Edit, Upload and Approve Attendance and Leaves</li>
              <li>This Admin will not have any payroll access</li>
            </ul>
          </div>
          <div className="flex justify-start">
            <button onClick={handleAddHrExecutiveClick} className="text-lg font-bold cursor-pointer flex items-center">
              <AiFillPlusCircle className="text-blue-500 mr-1" /> <span className='text-blue-500'>Add HR Executive</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
