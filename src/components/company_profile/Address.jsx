import { FiEdit2 } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
export const Address = () => {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [addData, setAddData] = useState(false);
  const [addData2, setAddData2] = useState(false);
  const [addData3, setAddData3] = useState(false);

  const handleAddOpen = () => {
    if (addData == false) {
      setAddData(true);
      console.log(addData);
    } else {
      setAddData(false);
      console.log(addData);
    }
  };
  const handleAddOpen2 = () => {
    if (addData2 == false) {
      setAddData2(true);
      console.log(addData2);
    } else {
      setAddData2(false);
      console.log(addData2);
    }
  };
  const handleAddOpen3 = () => {
    if (addData3 == false) {
      setAddData3(true);
      console.log(addData3);
    } else {
      setAddData3(false);
      console.log(addData3);
    }
  };

  return (
    <div>
      <div className="w-[100vw] flex  justify-center mt-3 pt-1 bg-slate-100   ">
        <div className="flex flex-col   w-[44%] h-auto justify-evenly  rounded-sm ">
          <div className="  flex flex-col h-auto mt-2 bg-white shadow-md">
            <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-2 border-gray-300">
              <h1 className="pl-3 text-medium font-medium uppercase">
                Registered office
              </h1>
              <div onClick={handleAddOpen} className=" cursor-pointer text-xl">
                <FiEdit2 />
              </div>
            </div>

            { !addData ? (
              <div className="flex flex-row items-center ml-4 text-blue-500">
                <button onClick={handleAddOpen}  className="text-3xl  font-bold cursor-pointer p-2">
                  <AiFillPlusCircle />
                </button>
                <h1 className="text-md  font-medium ">Add</h1>
              </div>
            ) : (
              <div className="bg-white">
                <form className="flex flex-col pl-2">
                  <div className="flex flex-col p-3">
                    <label htmlFor="addressLine1" className="text-sm">
                      Address Line 1
                    </label>
                    <input
                      id="addressLine1"
                      type="text"
                      className="rounded-md border-b border-gray-300 py-2"
                    />
                  </div>
                  <div className="flex flex-col p-3">
                    <label htmlFor="addressLine2" className="text-sm">
                      Address Line 2
                    </label>
                    <input
                      id="addressLine2"
                      type="text"
                      className="rounded-md border-b border-gray-300  py-2"
                    />
                  </div>

                  <div className="flex flex-row gap-3 w-full p-3">
                    <div className="flex flex-col w-[20%] md:w-1/2">
                      <label htmlFor="city" className="text-sm">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        className="rounded-md border-b border-gray-300 py-1"
                      />
                    </div>
                    <div className="flex flex-col w-[20%] md:w-1/2">
                      <label htmlFor="state" className="text-sm">
                        State
                      </label>
                      <select
                        id="state"
                        name="states"
                        className="rounded-md border-b border-gray-300  py-1"
                      >
                        <option value="">Select a state</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col w-[20%] md:w-1/2">
                      <label htmlFor="country" className="text-sm">
                        Country
                      </label>
                      <input
                        id="country"
                        type="text"
                        className="rounded-md border-b border-gray-300  py-1"
                      />
                    </div>
                    <div className="flex flex-col w-[20%] md:w-1/2">
                      <label htmlFor="pincode" className="text-sm">
                        Pincode
                      </label>
                      <input
                        id="pincode"
                        type="number"
                        className="rounded-md border-b  border-gray-300 py-1"
                      />
                    </div>
                  </div>
                  <div className="h-[100px] flex flex-row items-center justify-end bg-white">
                    <div className="flex flex-row w-[220px]">
                      <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
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
                </form>
              </div>
            )}
          </div>

          {/* form */}

          <div className="flex flex-col h-auto mt-2 bg-white shadow-md ">
            <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-2 border-gray-300">
              <h1 className="pl-3 text-medium font-medium uppercase">
                Corporate office
              </h1>
              <div onClick={handleAddOpen2}  className=" cursor-pointer text-xl">
                <FiEdit2 />
              </div>
            </div>

            {
  
    !addData2 ? (   <div className="flex flex-row items-center ml-4 text-blue-500">
    <button onClick={handleAddOpen2} className="text-3xl  font-bold cursor-pointer p-2">
      <AiFillPlusCircle />
    </button>
    <h1 className="text-md  font-medium ">Add</h1>
  </div>)  : ( <div className="bg-white">
              <form className="flex flex-col pl-2">
                <div className="flex flex-col p-3">
                  <label htmlFor="addressLine1" className="text-sm">
                    Address Line 1
                  </label>
                  <input
                    id="addressLine1"
                    type="text"
                    className="rounded-md border-b border-gray-300 py-2"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <label htmlFor="addressLine2" className="text-sm">
                    Address Line 2
                  </label>
                  <input
                    id="addressLine2"
                    type="text"
                    className="rounded-md border-b border-gray-300  py-2"
                  />
                </div>

                <div className="flex flex-row gap-3 w-full p-3">
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="rounded-md border-b border-gray-300 py-1"
                    />
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="state" className="text-sm">
                      State
                    </label>
                    <select
                      id="state"
                      name="states"
                      className="rounded-md border-b border-gray-300  py-1"
                    >
                      <option value="">Select a state</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="country" className="text-sm">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      className="rounded-md border-b border-gray-300  py-1"
                    />
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="pincode" className="text-sm">
                      Pincode
                    </label>
                    <input
                      id="pincode"
                      type="number"
                      className="rounded-md border-b  border-gray-300 py-1"
                    />
                  </div>
                </div>
                <div className="h-[100px] flex flex-row items-center justify-end bg-white">
                  <div className="flex flex-row w-[220px]">
                    <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
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
              </form>
            </div>)

            }
         

           
          </div>
          <div className="flex flex-col h-[90px] mt-2 bg-white shadow-md">
            <div className="flex flex-row justify-between  items-center border-b-[0.3px] p-2 border-gray-300">
              <h1 className="pl-3 text-medium font-medium uppercase">
                Costom address title
              </h1>
              <div onClick={handleAddOpen3} className=" cursor-pointer text-xl">
                <FiEdit2 />
              </div>
            </div>
            {
              !addData3 ? ( <div className="flex flex-row items-center ml-4 text-blue-500">
              <button onClick={handleAddOpen3} className="text-3xl  font-bold cursor-pointer p-2">
                <AiFillPlusCircle />
              </button>
              <h1 className="text-md  font-medium ">Add</h1>
            </div>) : (<div className="bg-white">
              <form className="flex flex-col pl-2">
              <div className="flex flex-col p-3">
                  <label htmlFor="addressLine1" className="text-sm">
                    Address title
                  </label>
                  <input
                    id="addressLine1"
                    type="text"
                    className="rounded-md border-b border-gray-300 py-2"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <label htmlFor="addressLine1" className="text-sm">
                    Address Line 1
                  </label>
                  <input
                    id="addressLine1"
                    type="text"
                    className="rounded-md border-b border-gray-300 py-2"
                  />
                </div>
                <div className="flex flex-col p-3">
                  <label htmlFor="addressLine2" className="text-sm">
                    Address Line 2
                  </label>
                  <input
                    id="addressLine2"
                    type="text"
                    className="rounded-md border-b border-gray-300  py-2"
                  />
                </div>

                <div className="flex flex-row gap-3 w-full p-3">
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className="rounded-md border-b border-gray-300 py-1"
                    />
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="state" className="text-sm">
                      State
                    </label>
                    <select
                      id="state"
                      name="states"
                      className="rounded-md border-b border-gray-300  py-1"
                    >
                      <option value="">Select a state</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="country" className="text-sm">
                      Country
                    </label>
                    <input
                      id="country"
                      type="text"
                      className="rounded-md border-b border-gray-300  py-1"
                    />
                  </div>
                  <div className="flex flex-col w-[20%] md:w-1/2">
                    <label htmlFor="pincode" className="text-sm">
                      Pincode
                    </label>
                    <input
                      id="pincode"
                      type="number"
                      className="rounded-md border-b  border-gray-300 py-1"
                    />
                  </div>
                </div>
                <div className="h-[100px] flex flex-row items-center justify-end bg-white">
                  <div className="flex flex-row w-[220px]">
                    <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
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
              </form>
            </div>)
            }
           

          </div>
        </div>
      </div>
    </div>
  );
};
