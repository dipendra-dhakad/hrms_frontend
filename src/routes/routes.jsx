import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { CompanyProfile } from "../layout/CompanyProfile";
import { Home } from "../pages/Home";
import Overview from "../components/company_profile/Overview";
import { Address } from "../components/company_profile/Address";
import { Admin } from "../components/company_profile/Admin";
import { Announcement } from "../components/company_profile/Announcement";
import { Department } from "../components/company_profile/Department";
import { Designation } from "../components/company_profile/Designation";
import { Myplan } from "../components/company_profile/Myplan";
import { Policies } from "../components/company_profile/Policies";
import { Statutory } from "../components/company_profile/Statutory";
const router = createBrowserRouter([
  {
    path: "/company-profile",
    element: <CompanyProfile/>,
    children:[{
        path:"/company-profile",
        element:<Overview/>
    },
    {
        path:"overview",
        element:<Overview/>
    },
    {
        path:"address",
        element:<Address/>
    },
    {
        path:"admin",
        element:<Admin/>
    },
    {
        path:"announcement",
        element:<Announcement/>
    },
    {
        path:"department",
        element:<Department/>
    },
    {
        path:"designation",
        element:<Designation/>
    },
    {
        path:"myplan",
        element:<Myplan/>
    },
    {
        path:"policies",
        element:<Policies/>
    },
    {
        path:"statutory",
        element:<Statutory/>
    }
]
   
  },
  {
    path: "/",
    element: <Home />,
  },
]);
export default router;