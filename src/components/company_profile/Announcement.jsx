// import { RxCross1 } from "react-icons/rx";
// import { BiMessageError } from "react-icons/bi";
// import React from 'react'

// export const Announcement = () => {
//   return (
//     <div className="flex items-center  justify-center">

//   <div className="flex flex-col  w-[40%] bg-slate-100 p-3 m-2">
//    <div className='uppercase  '>Announcements</div>
//    <div className="flex flex-row  m-2" ><div className="flex flex-row "><BiMessageError /> Post an Announcement</div><div><RxCross1 /></div></div>
//    <div>
//     <form action="">

//     <div className=" flex flex-col ">
//       Message
//       <textarea

//         rows={4} // Specify the number of rows for the textarea
//         cols={50} // Specify the number of columns for the textarea
//         placeholder="Enter Announcement"
//       />
//       0/100 Charactors
//     </div>
//      <div className="flex w-full flex-row items-center justify-end pr-3 "> <button type="submit" className=" self-end p-2 px-3  text-white font-medium  bg-blue-500 rounded-md"> Post</button></div>
//     </form>
//    </div>
//    <div>
//     <div>Live Announcement</div>
//     <div>No live announcement right</div>
//    </div>
// </div>

//     </div>
//   )
// }

import { MdDeleteOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import React, { useState } from "react";
import { BiMessageError } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

export const Announcement = () => {
  const [announcement, setAnnouncement] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [liveAnnouncement, setLiveAnnouncement] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextareaChange = (e) => {
    const message = e.target.value;
    setAnnouncement(message);
    setCharCount(message.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., posting announcement)
    setLiveAnnouncement(announcement);
    // Reset form state
    setAnnouncement("");
    setCharCount(0);
    setIsEditing(false);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setShowForm(true);
    setIsEditing(true);
    setAnnouncement(liveAnnouncement);
    setCharCount(liveAnnouncement.length);
  };

  const handleDelete = () => {
    setLiveAnnouncement("");
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="w-[40%] bg-slate-50 p-6 rounded-lg shadow-lg">
        <div className="text-xl font-bold mb-4">Announcements</div>
        <div className="flex items-center mb-4" onClick={handleToggleForm}>
          <BiMessageError className="text-blue-500 mr-2 cursor-pointer" />
          <span className="font-bold cursor-pointer">Post an Announcement</span>
          {showForm && (
            <RxCross1
              className="ml-auto cursor-pointer"
              onClick={handleToggleForm}
            />
          )}
        </div>
        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label htmlFor="announcementTextarea" className="block font-bold">
                Message
              </label>
              <textarea
                id="announcementTextarea"
                value={announcement}
                onChange={handleTextareaChange}
                rows={4}
                placeholder="Enter Announcement"
                className="w-full p-2 border rounded-md"
              />
              <div className="text-xs text-gray-500">
                {charCount}/100 Characters
              </div>
            </div>
            <div className="flex justify-end">
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    onClick={handleToggleForm}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                >
                  Post
                </button>
              )}
            </div>
          </form>
        )}
        <div className="mt-4">
          <div className="font-bold">Live Announcement</div>
          {liveAnnouncement ? (
            <div className="mt-2 text-gray-700">{liveAnnouncement}</div>
          ) : (
            <div className="mt-2 text-gray-700">
              No live announcement right now
            </div>
          )}
          {liveAnnouncement && (
            <div className="mt-2 flex justify-end">
              <button
                className=" text-black font-bold py-2 px-4 rounded mr-2"
                onClick={handleEdit}
              >
                <TbEdit />
              </button>
              <button
                className=" text-black font-bold py-2 px-4 rounded"
                onClick={handleDelete}
              >
                <MdDeleteOutline />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
