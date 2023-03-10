import React from 'react'
import Registration from './home/Registration'
import Header from './home/Header'
import About from './home/About'
import Guidelines from './home/Guidelines'
import Info from './home/Info'

const Home = () => {
  return (
    <div className='mt-5 pt-5'>
      <hr className='text-danger opacity-100 my-0 border border-danger mt-lg-3'/>
      <Header title='Welcome to nysc portal'/>
      <main className='container-fluid my-5 px-3'>
        <Registration/>
        <About/>
        <hr className='w-75 opacity-75 mx-auto d-none d-lg-block mt-2 mb-4'/>
        <Guidelines/>
        <hr className='w-75 opacity-75 mx-auto d-none d-lg-block mt-2 mb-4'/>
        <Info/>
      </main>
    </div>
  )
}

export default Home
