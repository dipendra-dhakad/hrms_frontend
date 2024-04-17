// import React, { useState } from "react";
// import { AiOutlineLeft } from "react-icons/ai";
// import { BiLockOpen } from "react-icons/bi";
// import { IoMdContact } from "react-icons/io";
// import logo from "../signup/login_image1.svg";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [loginFormData, setLoginFormData] = useState({
//     email: "",
//     password: ""
//   });
//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3500/api/v1/auth/login",
//         loginFormData
//       );
//       console.log("Login successful:", response.data);
//       // Redirect or perform actions after successful login
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setLoginFormData({
//       ...loginFormData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleForgotPassword = () => {
//     navigate("/forgetPassword");
//     console.log("Forgot password clicked");
//   };

//   return (
//     <div className="flex flex-row items-center justify-center w-full h-screen gap-2 bg-slate-200">
//       <div className="w-1/3 h-3/4 border flex mt-8">
//         <div>
//           <img
//             className="pt-8"
//             src={logo}
//             width="90%"
//             height="90%"
//             alt="Logo"
//           />
//         </div>
//       </div>
//       <div className="w-1/3 h-5/6">

//         <div className="mt-3 shadow-2xl rounded-md">
//           <form onSubmit={handleLogin}>
//             <div className="flex flex-col items-center justify-evenly bg-white text-black w-auto gap-3 ">
//               <div className="flex flex-row  justify-between items-center w-[100%] px-10 ">
//                 <div className="p-1 pt-2 text-lg font-medium">Login</div>
//                 <div className="text-xs">
//                   Don't have an Account{" "}
//                   <span className="text-blue-500 text-lg cursor-pointer">
//                     Sign up
//                   </span>{" "}
//                 </div>
//               </div>
//               <div className="w-4/5  flex flex-col p-1 py-2">
//                 <label htmlFor="">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={loginFormData.email}
//                   required
//                   onChange={handleInputChange}
//                   placeholder="Enter your Email"
//                   className="rounded-b-none border-b-[0.7px] border-gray-500 w-full py-2 px-4 text-black"
//                 />
//               </div>
//               <div className="w-4/5  flex flex-col p-1 py-2">
//                 <label htmlFor="">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={loginFormData.password}
//                   required
//                   onChange={handleInputChange}
//                   placeholder="Enter your Password"
//                   className="rounded-b-none border-b-[0.7px] border-gray-500 w-full py-2 px-4 text-black"
//                 />
//               </div>
//               <div className="flex justify-end w-4/5 text-right">
//                 <span
//                   onClick={handleForgotPassword}
//                   className="text-xs text-blue-500 cursor-pointer"
//                 >
//                   Forgot Password?
//                 </span>
//               </div>
//               <div className="pb-4">
//                 <button
//                   type="submit"
//                   className="p-2 px-4 bg-red-400 text-sm font-medium text-white rounded-full shadow-xl"
//                 >
//                   Login
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import logo from "../signup/login_image1.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

   
  const handleToken = (token) => {
    localStorage.setItem("token", token);
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3500/api/v1/auth/login",
        loginFormData
      );
      if (res.data.token) {
        toast.success("successfully login");
        const token = res.data.token;
  
        handleToken(token);
        navigate('/home');
      } else {
        console.log("try again");
      }
      console.log("Login successful:", res.data);
      console.log("token",res.data.token)
      // Redirect or perform actions after successful login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleInputChange = (e) => {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleForgotPassword = () => {
    navigate("/forgetPassword");
    console.log("Forgot password clicked");
  };

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-slate-200">
      <div className="w-4/5  pt-8  items-center justify-center  flex-row md:w-1/3 h-5/6  border flex mt-8 hidden md:block">
        <div className="ml-[30%]">
          <img
            className="pt-8 md:block hidden "
            src={logo}
            width="80%"
            height="80%"
            alt="Logo"
          />
        </div>
      </div>
      <div className="w-4/5  md:w-1/3">
        <div className="mt-3 shadow-2xl rounded-md ">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col items-center justify-evenly bg-white text-black w-full gap-3 p-5 pb-11">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="p-1 pt-2 text-lg font-medium">Login</div>
                <div className="text-xs">
                  Don't have an Account{" "}
                  <span className="text-blue-500 text-lg cursor-pointer">
                    Sign up
                  </span>{" "}
                </div>
              </div>
              <div className="w-full flex flex-col p-1 py-2">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  value={loginFormData.email}
                  required
                  onChange={handleInputChange}
                  placeholder="Enter your Email"
                  className="rounded-b-none border-b-[0.7px] border-gray-500 w-full py-2 px-4 text-black"
                />
              </div>
              <div className="w-full flex flex-col p-1 py-2">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={loginFormData.password}
                  required
                  onChange={handleInputChange}
                  placeholder="Enter your Password"
                  className="rounded-b-none border-b-[0.7px] border-gray-500 w-full py-2 px-4 text-black"
                />
              </div>
              <div className="flex justify-end w-full text-right">
                <span
                  onClick={handleForgotPassword}
                  className="text-xs text-blue-500 cursor-pointer"
                >
                  Forgot Password?
                </span>
              </div>
              <div className="pb-8">
                <button
                  type="submit"
                  className="p-2 px-4 bg-red-400 text-sm font-medium text-white rounded-full shadow-xl"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
