import React from 'react'
import SubNav from '../components/SubNav'
import { Outlet } from 'react-router-dom'
import {Navbar} from '../components/Navbar'
export const CompanyProfile = () => {
  return (<>
  <Navbar/>
   <SubNav/>
   <Outlet/>
   </>
  )
}
