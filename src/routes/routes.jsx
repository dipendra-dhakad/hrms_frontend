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
import { Signup1 } from "../components/signup/Signup1";
import Login from "../components/login/Login";
import ForgotPassword from "../components/login/ForgotPassword";
import { Sidebar } from "../components/Sidebar";
import { MyProfile } from "../layout/MyProfile";
import { Work } from "../components/my_profile/Work";
import { Team } from "../components/my_profile/Team";
import { Education } from "../components/my_profile/Education";
import { Family } from "../components/my_profile/Family";
import { FileManager } from "../components/my_profile/FileManager";
import { Attendence } from "../layout/Attendence";
import { Logs } from "../components/attendence/Logs";
import { AutomationLogs } from "../components/attendence/AutomationLogs";
import { Rules } from "../components/attendence/Rules";
import { Approvals } from "../components/attendence/Approvals";
import { Analytics } from "../components/attendence/Analytics";
import { Settings } from "../components/attendence/Settings";
import { Leave } from "../layout/Leave";
import { LeaveLogs } from "../components/leave/LeaveLogs";
import { Balance } from "../components/leave/Balance";
import { Payroll } from "../layout/Payroll";
import { RunPayroll } from "../components/payroll/RunPayroll";
import { SetupPayroll } from "../components/payroll/SetupPayroll";
import { Declaration } from "postcss";
import { AdvanceSettings } from "../components/payroll/AdvanceSettings";
import { AuditHistory } from "../components/payroll/AuditHistory";
import Statutory_temprary from "../components/company_profile/Statutory_temprary";
import { Personal } from "../components/my_profile/Personal";
import { Document } from "../components/my_profile/Document";
const router = createBrowserRouter([
  {
    path: "/company-profile",
    element: <CompanyProfile />,
    children: [
      {
        path: "/company-profile",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "address",
        element: <Address />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "announcement",
        element: <Announcement />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "designation",
        element: <Designation />,
      },
      {
        path: "myplan",
        element: <Myplan />,
      },
      {
        path: "policies",
        element: <Policies />,
      },
      {
        path: "statutory",
        element: <Statutory />,
      },
    ],
  },
  {
    path: "/my-profile",
    element: <MyProfile/>,
    children:[{
        path:"/my-profile",
        element:<Work/>
    },
    {
        path:"personal",
        element:<Personal/>
    },
    {
        path:"work",
        element:<Work/>
    },
    {
        path:"team",
        element:<Team/>
    },
    {
        path:"education",
        element:<Education/>
    },
    {
        path:"family",
        element:<Family/>
    },
    {
        path:"documents",
        element:<Document/>
    },
    {
        path:"file-manager",
        element:<FileManager/>
    }
]
   
  },

  {
    path: "/attendence",
    element: <Attendence />,
    children: [
      {
        path: "/attendence",
        element: <Logs />,
      },
      {
        path: "logs",
        element: <Logs />,
      },
      {
        path: "automation-logs",
        element: <AutomationLogs />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "approvals",
        element: <Approvals />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "/leave",
    element: <Leave />,
    children: [
      {
        path: "/leave",
        element: <LeaveLogs />,
      },

      {
        path: "rules",
        element: <Rules />,
      },

      {
        path: "balance",
        element: <Balance />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },

  {
    path: "/payroll",
    element: <Payroll />,
    children: [
      {
        path: "/payroll",
        element: <RunPayroll />,
      },

      {
        path: "setup-payroll",
        element: <SetupPayroll />,
      },

      {
        path: "declaration",
        element: <Declaration />,
      },
      {
        path: "advance-settings",
        element: <AdvanceSettings />,
      },
      {
        path: "audit-history",
        element: <AuditHistory />,
      },
    ],
  },

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup1 />,
  },
  {
    path: "/forgetPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
]);
export default router;
