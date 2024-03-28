import React from 'react'
import { Category } from '../components/Category'

import { Navbar2 } from '../components/Navbar2'
import { Notifications } from '../components/Notifications'
export const Home = () => {
  return (
    <div className='flex flex-col items-center '>
    <Navbar2/>
    <Notifications/>
    <Category/>
    </div>
 
  )
}
