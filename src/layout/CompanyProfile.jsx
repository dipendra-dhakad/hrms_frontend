import React from 'react'
import SubNav from '../components/SubNav'
import { Outlet } from 'react-router-dom'
import {Navbar} from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { useSelector } from 'react-redux'
export const CompanyProfile = () => {
   
  const {sidebar} = useSelector((state)=>state.sidebar);

  return (<>
  <div className='relative'>
  <div className='absolute'>
        {sidebar ?  (<Sidebar />) : (null) }
      </div>
  <Navbar/>
   <SubNav/>
   <Outlet/>
  </div>
 
   </>
  )
}
