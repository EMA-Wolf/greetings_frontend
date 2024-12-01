import React from 'react'
import { Outlet } from 'react-router-dom'

const Authpage = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col bg-gray-500'>
      <Outlet/>
    </div>
  )
}

export default Authpage
