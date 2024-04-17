import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
;

const Layout = () => {
  return (
    <>
 <Navbar/>
      <div className="xl:ml-14 ml-0 px-4 ">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;