import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'

const Layout = () => {
  return (
    <div className='App'>
      <Header/>
      <Modal/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
