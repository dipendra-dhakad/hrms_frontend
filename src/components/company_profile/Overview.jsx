
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

import { ImLinkedin } from "react-icons/im";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios"; 
import { Link } from "react-router-dom";

const Overview = () => {
  const [edit, setEdit] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [companyFormData, setCompanyFormData] = useState({
    companyName: "",
    website: "",
    companyEmail: "",
    brandName: "",
    companyContact: "",
    domainName: "",
    industryType: ""
  });

  const [socialMediaFormData, setSocialMediaFormData] = useState({
    linkedinUrl: "",
    twitterUrl: "",
    facebookUrl: "",
    youtubeUrl: ""
  });

  const handleCompanyChange = (e) => {
    setCompanyFormData({
      ...companyFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialMediaChange = (e) => {
    setSocialMediaFormData({
      ...socialMediaFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/v1/company/createOverview",
        companyFormData
      );
      console.log("Company Form Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting company form data:", error);
    }
  };

  const handleSocialMediaSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3500/api/v1/company/createOverview",
        socialMediaFormData
      );
      console.log("Social Media Form Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting social media form data:", error);
    }
  };

  const handleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const handleEdit2 = () => {
    setEdit2((prevEdit) => !prevEdit);
  };

  return (
    <div>
  

  <div className="bg-slate-200 h-[100vh]">
  <div className="container mx-auto w-[45%] py-2">
    <div>
    <div className="flex flex-row items-center justify-between p-1 bg-slate-50 border-b-[0.7px] border-gray-500 mb-1">
      <h1 className="text-xl font-semibold mb-4 ml-1">Overview</h1>
      <div onClick={handleEdit} className="mr-1 text-xl text-center font-bold cursor-pointer">
        <MdOutlineEdit />
      </div>
    </div>

   

    <div className="bg-slate-100">
      {
        edit ? (
          <div> <form onSubmit={handleCompanySubmit}>
          <div className="flex flex-row justify-around">
            <div className="p-1 bg-slate-50 pl-3 w-[50%]">
              <div className="m-1 p-2">
              <label htmlFor="companyName1" className="text-normal ">
                Registered Company Name
              </label>
              <input
                id="companyName1"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-2 px-4"
                type="text"
                value={companyFormData.companyName}
                onChange={handleCompanyChange}
                name="companyName"
                placeholder="Enter Company Name"
              />
              </div>
  
  
              <div className="m-1 p-2">
              <label htmlFor="companyEmail1" className="text-normal">
                Company Official Email
              </label>
              <input
                id="companyEmail1"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-2 px-4"
                type="email"
                value={companyFormData.companyEmail}
                name="companyEmail"
                onChange={handleCompanyChange}
                placeholder="Enter Company Email"
              />
              </div>
  
              <div className="m-1 p-2">
              <label htmlFor="companyWebsite1" className="text-narmal ">
                Company Website
              </label>
              <input
                id="companyWebsite1"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] mr-2 py-2 px-6"
                type="url"
                name="website"
             value={companyFormData.website}
             onChange={handleCompanyChange}
                placeholder="Enter Company Website"
              />
              </div>
  
             <div className="m-1 p-2">
             <label htmlFor="industryType" className="text-normal ">
                Industry Type
              </label>
              <select
                id="industryType"
                value={companyFormData.industryType}
                onChange={handleCompanyChange}
                name="industryType"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-4 px-4"
              >
                <option value="education">Education</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
              </select>
             </div>
            </div >
            <div className="p-1 bg-slate-50 pl-3 w-[50%]">
             <div className="m-1 p-2 flex flex-col">
             <label htmlFor="companyName2" className="text-normal ">
                Brand Name
              </label>
              <input
                id="companyName2"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-2 px-4"
                type="text"
                name="brandName"
                value={companyFormData.brandName}
                placeholder="Enter Company Name"
                onChange={handleCompanyChange}
              />
             </div>
  
             <div className="m-1 p-2">
             <label htmlFor="companyEmail2" className="text-normal ">
                Company Official Contact
              </label>
              <input
                id="companyEmail2"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-2 px-4"
                type="phone"
                name="companyContact"
                value={companyFormData.companyContact}
                onChange={handleCompanyChange}
                placeholder="Enter Company Email"
              />
             </div>
  
             <div className="m-1 p-2">
             <label htmlFor="companyWebsite2" className="text-normal ">
                Domain Name
              </label>
              <input
                id="companyWebsite2"
                className="rounded-b-none border-b-[0.7px] border-gray-500 w-[80%] py-2 px-4"
                type="text"
                name="domainName"
                value={companyFormData.domainName}
                onChange={handleCompanyChange}
                placeholder="Enter Company Website"
              />
             </div>
            </div>
           
  
            
          </div>
          
         <div className="h-[100px] flex flex-row items-center justify-end bg-white">
          <div className=' bg-white flex flex-row w-[300px] '>
          {/* <div className='bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border-spacing-1'>
          <RxCross2 />
              <button onClick={handleEdit} className=' text-black text-sm font-semibold'> CANCLE </button>
               
          </div> */}
          <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
    <RxCross2 class="text-black text-sm font-semibold" />
    <button onClick={handleEdit} class="text-black text-sm font-semibold">CANCEL</button>
</div>

          {/* <div  className='bg-blue-600 flex flex-row items-center justify-center rounded p-2  m-1 text-white hover:scale-105 hover:shadow-md shadow-black'>
          <AiOutlineCheck />
              <button type='submit' className=' text-white text-sm font-semibold pl-3 pr-3' >SAVE</button>
             
          </div> */}
          <div class="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
    <AiOutlineCheck class="text-xl" />
    <button type="submit" onClick={handleEdit} class="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
</div>
      </div>
          </div>
        </form> </div>
        ):( <div><form action="">
        <div className="flex flex-row justify-around">
          <div className="p-1 bg-slate-50 pl-3 w-[50%]">
            <div className="m-1 p-2">
              <label htmlFor="companyName1" className="text-normal">
                Registered Company Name
              </label>
              <h1 id="companyName1" className="text-lg font-semibold"> </h1>
            </div>
            <div className="m-1 p-2">
              <label htmlFor="companyEmail1" className="text-normal">
                Company Official Email
              </label>
              <h1 id="companyEmail1" className="text-lg font-semibold"></h1>
            </div>
            <div className="m-1 p-2">
              <label htmlFor="companyWebsite1" className="text-normal">
                Company Website
              </label>
              <h1 id="companyWebsite1" className="text-lg font-semibold"></h1>
            </div>
            <div className="m-1 p-2">
              <label htmlFor="industryType" className="text-normal">
                Industry Type
              </label>
              <h1 id="industryType" className="text-lg font-semibold"></h1>
            </div>
          </div>
          <div className="p-1 bg-slate-50 pl-3 w-[50%]">
            <div className="m-1 p-2 flex flex-col">
              <label htmlFor="companyName2" className="text-normal">
                Brand Name
              </label>
              <h1 id="companyName2" className="text-lg font-semibold"></h1>
            </div>
            <div className="m-1 p-2">
              <label htmlFor="companyEmail2" className="text-normal">
                Company Official Contact
              </label>
              <h1 id="companyEmail2" className="text-lg font-semibold"></h1>
            </div>
            <div className="m-1 p-2">
              <label htmlFor="companyWebsite2" className="text-normal">
                Domain Name
              </label>
              <h1 id="companyWebsite2" className="text-lg font-semibold"></h1>
            </div>
          </div>
        </div>
      
       
            </form></div>
) 
      }
{/*       
     */}
      {/* <form action="">
  <div className="flex flex-row justify-around">
    <div className="p-1 bg-slate-50 pl-3 w-[50%]">
      <div className="m-1 p-2">
        <label htmlFor="companyName1" className="text-normal">
          Registered Company Name
        </label>
        <h1 id="companyName1" className="text-lg font-semibold"> </h1>
      </div>
      <div className="m-1 p-2">
        <label htmlFor="companyEmail1" className="text-normal">
          Company Official Email
        </label>
        <h1 id="companyEmail1" className="text-lg font-semibold"></h1>
      </div>
      <div className="m-1 p-2">
        <label htmlFor="companyWebsite1" className="text-normal">
          Company Website
        </label>
        <h1 id="companyWebsite1" className="text-lg font-semibold"></h1>
      </div>
      <div className="m-1 p-2">
        <label htmlFor="industryType" className="text-normal">
          Industry Type
        </label>
        <h1 id="industryType" className="text-lg font-semibold"></h1>
      </div>
    </div>
    <div className="p-1 bg-slate-50 pl-3 w-[50%]">
      <div className="m-1 p-2 flex flex-col">
        <label htmlFor="companyName2" className="text-normal">
          Brand Name
        </label>
        <h1 id="companyName2" className="text-lg font-semibold"></h1>
      </div>
      <div className="m-1 p-2">
        <label htmlFor="companyEmail2" className="text-normal">
          Company Official Contact
        </label>
        <h1 id="companyEmail2" className="text-lg font-semibold"></h1>
      </div>
      <div className="m-1 p-2">
        <label htmlFor="companyWebsite2" className="text-normal">
          Domain Name
        </label>
        <h1 id="companyWebsite2" className="text-lg font-semibold"></h1>
      </div>
    </div>
  </div>

 
      </form> */}

    </div>
    </div>
   
  </div>
  <div className="container mx-auto w-[45%] py-2">
    <div>
    <div className="flex flex-row items-center justify-between p-1 bg-slate-50 border-b-[0.7px] border-gray-500 mb-1">
      <h1 className="text-xl font-semibold mb-4 ml-1">Social Media</h1>
       <div onClick={handleEdit2} className="mr-1 text-xl text-center font-bold cursor-pointer">
        <MdOutlineEdit />
      </div> 
    </div>

   

    <div className="bg-slate-100 h-50 pt-1">
      {/* <form action="">
        <div className="pl-7 ">
        <div className="flex flex-row justify-start items-center m-2 p-2 "> <div className="text-3xl"><ImLinkedin /> </div>
          <input
              
              className=" border-b-[0.7px] border-gray-500 w-[60%]  ml-4 rounded-md"
              type="url"
              placeholder="Enter facebook URL"
            />
 </div>
          <div className="flex flex-row justify-start items-center m-2 p-2 "> <div className="text-3xl"><FaFacebook /> </div>
          <input
              
              className="rounded-b-none border-b-[0.7px] border-gray-500 w-[60%]  ml-4 rounded-md"
              type="url"
              placeholder="Enter facebook URL"
            />
 </div>
 <div className="flex flex-row justify-start items-center m-2 p-2"> <div className="text-3xl"><FaXTwitter /> </div> 
          <input
              
              className="rounded-b-none border-b-[0.7px] border-gray-500 w-[60%]  ml-4 rounded-md"
              type="url"
              placeholder="Enter facebook URL"
            />
 </div>
        </div>
        <div className="h-[100px] flex flex-row items-center justify-end bg-white">
        <div className=' bg-white flex flex-row w-[200px] '>
        <div className='bg-white flex flex-row items-center justify-center rounded p-2 m-1 hover:scale-105'>
        <RxCross2 />
            <button  className=' text-black text-sm font-semibold'> CANCLE </button>
             
        </div>
        <div  className='bg-blue-600 flex flex-row items-center justify-center rounded p-2  m-1 text-white hover:scale-105'>
        <AiOutlineCheck />
            <button type='submit' className=' text-white text-sm font-semibold pl-3 pr-3' >SAVE</button>
           
        </div>
    </div>
        </div>
      </form> */}
      {
        !edit2 ? (<div className="flex flex-row items-center  justify-start gap-2 ml-5  h-[60px]">
        <Link to=""> <div className="text-3xl text-blue-700 rounded-full"><ImLinkedin /></div> </Link>
        
        <Link to="">   <div className="text-3xl text-blue-700 rounded-full"><FaFacebook /></div></Link>
        <Link to="">   <div className="text-3xl text-white bg-black rounded-full"><FaTwitter /></div></Link>
        <Link to="">   <div className="text-3xl text-white bg-red-500 rounded-full"><AiFillYoutube /></div></Link>
      
        </div>):( 
          <div>
<form onSubmit={handleSocialMediaSubmit}>
  <div className="pl-7">
    <div className="flex flex-row justify-start items-center m-2">
      <div className="text-3xl text-blue-700 text-center"><ImLinkedin /></div>
      <input
        className="border-b-[0.7px] border-gray-500 w-[80%] ml-4 rounded-md py-2 px-3 focus:outline-none"
        type="url"
        name="linkedinUrl"
        value={socialMediaFormData.linkedinUrl}

        onChange={handleSocialMediaChange}
        placeholder="Enter LinkedIn URL"
      />
    </div>
    <div className="flex flex-row justify-start items-center m-2">
      <div className="text-3xl text-blue-700  text-center"><FaFacebook /></div>
      <input
        className="border-b-[0.7px] border-gray-500 w-[80%] ml-4 rounded-md py-2 px-3 focus:outline-none"
        type="url"
        onChange={handleSocialMediaChange}
        value={socialMediaFormData.facebookUrl}
        name="facebookUrl"
        placeholder="Enter Facebook URL"
      />
    </div>
    <div className="flex flex-row justify-start items-center m-2">
      <div className="text-3xl text-black  text-center"><FaTwitter/></div>
      <input
        className="border-b-[0.7px] border-gray-500 w-[80%] ml-4 rounded-md py-2 px-3 focus:outline-none"
        type="url"
        onChange={handleSocialMediaChange}
        value={socialMediaFormData.twitterUrl}
        placeholder="Enter Twitter URL"
        name="twitterUrl"
      />
    </div>
    <div className="flex flex-row justify-start items-center m-2">
      <div className="text-3xl text-blue-700  text-center"><AiFillYoutube /></div>
      <input
        className="border-b-[0.7px] border-gray-500 w-[80%] ml-4 rounded-md py-2 px-3 focus:outline-none"
        type="url"
        onChange={handleSocialMediaChange}
        placeholder="Enter youtube URL"
        value={socialMediaFormData.youtubeUrl}
        name="youtubeUrl"
      />
    </div>
  </div>
  <div className="h-[100px] flex flex-row items-center justify-end bg-white">
    <div className="flex flex-row w-[300px]">
    <div class="bg-white flex gap-1 flex-row items-center justify-center rounded p-2 m-1 hover:scale-105 border border-gray-300">
    <RxCross2 class="text-black text-sm font-semibold" />
    <button onClick={handleEdit2} class="text-black text-sm font-semibold">CANCEL</button>
</div> 
<div class="bg-blue-600 flex items-center justify-center rounded p-2 m-1 text-white hover:scale-105 hover:shadow-md">
    <AiOutlineCheck class="text-xl" />
    <button type="submit" class="text-white text-sm font-semibold pl-3 pr-3">SAVE</button>
</div>
    </div>
  </div>
</form>
          </div> )
      }
     
  
  
    </div>
    </div>
   
  </div> 
    

</div>

</div>

  );
};

export default Overview;