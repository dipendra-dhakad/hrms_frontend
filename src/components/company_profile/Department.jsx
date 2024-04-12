import { MdOutlineDeleteOutline } from "react-icons/md";
import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";

export const Department = () => {
  const [inputFields, setInputFields] = useState([{ id: 0, value: "" }]);
  const data = [{ department: "", subdepartment: [] }];
  // Function to handle adding input fields
  const handleAddFields = () => {
    const newInputFields = [...inputFields];
    newInputFields.push({ id: inputFields.length, value: "" });
    setInputFields(newInputFields);
  };

  // Function to handle removing input fields
  const handleRemoveFields = (id) => {
    const newInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(newInputFields);
  };

  // Function to handle input change
  const handleInputChange = (id, event) => {
    const newInputFields = [...inputFields];
    newInputFields[id].value = event.target.value;
    setInputFields(newInputFields);
  };

  return (
    <div className="w-[100vw] flex  justify-center mt-3 pt-1 bg-slate-100   ">
        <div className="flex flex-col   w-[44%] h-auto justify-evenly  rounded-sm ">

        <div className="  flex flex-col h-auto mt-2 bg-white shadow-md">
          <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-2 border-gray-300">
            <h1 className="pl-3 text-medium font-medium uppercase">
              Registered office
            </h1>
            <div className=" cursor-pointer text-xl">
              <FiEdit2 />
            </div>
          </div>
          <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-4 pl-5 border-gray-300">
            <div>
              <h1 className=" text-sm text-gray-800 font-medium">
                {" "}
                Department{" "}
              </h1>
            </div>
            <div>
              <h1> Sub Departments </h1>
            </div>
            <div>
              <h1> Department Head </h1>
            </div>
            <div>
              <h1> Employees </h1>
            </div>
          </div>
          <div className="flex flex-row items-center ml-4 text-blue-500">
            <button className="text-3xl  font-bold cursor-pointer p-2">
              <AiFillPlusCircle />
            </button>
            <h1 className="text-md  font-medium ">Add</h1>
          </div>

          <div className="flex flex-col gap-1 h-auto w-full">
            <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-4 pl-5 border-gray-300">
              <div>Departments</div>
              <div>Sub Departments</div>
              <div>Employees</div>
            </div>
            <div
              className="flex flex-row
    border-b-[0.3px] p-2 pl-3 border-gray-300 justify-center"
            >
              {inputFields.map((inputField, index) => (
                <div key={inputField.id} className="flex">
                  <input
                    type="text"
                    value={inputField.value}
                    onChange={(event) =>
                      handleInputChange(inputField.id, event)
                    }
                    className="focus:outline-blue-300 p-1 ml-3 border border-gray-300 form-input"
                  />
                  {index === inputFields.length - 1 && (
                    <div className="flex flex-row items-center text-blue-500">
                      <button
                        className="text-3xl font-bold cursor-pointer p-2"
                        onClick={handleAddFields}
                      >
                        <AiFillPlusCircle />
                      </button>
                      <h1 className="text-md font-medium">Add</h1>
                    </div>
                  )}
                  {inputFields.length > 1 && (
                    <div className="flex items-center ml-4 text-red-500 ">
                      <button
                        className=""
                        onClick={() => handleRemoveFields(inputField.id)}
                      >
                        {" "}
                        {/* <AiFillMinusCircle /> */}
                        <MdOutlineDeleteOutline />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-1 pl-3 border-gray-300">
              <div className="flex flex-row items-center  ml-4 text-blue-500">
                <button className="text-3xl  font-bold cursor-pointer p-1">
                  <AiFillPlusCircle />
                </button>
                <h1 className="text-md  font-medium ">Add</h1>
              </div>
            </div>

            <div className="h-[100px] flex flex-row items-center justify-end bg-white">
              <div className="flex flex-row ">
                <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2  hover:scale-105 border border-gray-300">
                  <RxCross2 class="text-black text-sm font-semibold" />
                  <button class="text-black text-sm font-semibold">
                    CANCEL
                  </button>
                </div>
                <div class="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
                  <AiOutlineCheck class="text-xl" />
                  <button
                    type="submit"
                    class="text-white text-sm font-semibold pl-3 pr-3"
                  >
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
