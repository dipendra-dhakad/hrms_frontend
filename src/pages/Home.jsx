// import React from 'react'
// import { Category } from '../components/Category'

// import { Navbar2 } from '../components/Navbar2'
// import { Notifications } from '../components/Notifications'
// import {Navbar} from '../components/Navbar'
// import { Sidebar } from '../components/Sidebar'
// import { useSelector } from 'react-redux'
// export const Home = () => {

//   const sidebar = useSelector((state)=>state.side)

//   return (
//     <div className=' relative'>
      
//       <div className='absolute'>  {
//         sidebar &&  <Sidebar/>
//       }  </div>
//       <div className='flex flex-col items-center '>
     
//     <Navbar/>
//     <Navbar2/>
//     <Notifications/>
//     <Category/>
//     </div>
//     </div>
 
//   )
// }
import React, { useEffect } from 'react';
import { Category } from '../components/Category';
import { Navbar2 } from '../components/Navbar2';
import { Notifications } from '../components/Notifications';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { useSelector } from 'react-redux';

export const Home = () => {
  const {sidebar} = useSelector((state) => state.sidebar);

  return (
    <div className='relative'>
      <div className='absolute'>
        {sidebar ?  (<Sidebar />) : (null) }
      </div>
      <div className='flex flex-col items-center'>
        <Navbar />
        <Navbar2 />
        <Notifications />
        <Category />
      </div>
    </div>
  );
};
