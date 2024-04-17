import React from "react";
import SubNav from "../components/SubNav";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { useSelector } from "react-redux";
import { Second_sidebar } from "../components/Second_sidebar";

export const CompanyProfile = () => {
  const { sidebar } = useSelector((state) => state.sidebar);

  return (
    <div className="w-[100%] h-[100%]">
      <div className="relative">
        <div className="absolute">{sidebar ? <Sidebar /> : null}</div>
        <Navbar />
   
        <Outlet />
      </div>
    </div>
  );
};
