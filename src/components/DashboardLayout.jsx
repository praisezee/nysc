import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardHeader from './dashboard/DashboardHeader'

const DashboardLayout = () => {
  return (
    <div className='Main'>
      <DashboardHeader/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
