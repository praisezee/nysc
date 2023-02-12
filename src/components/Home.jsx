import React from 'react'
import Registration from './home/Registration'
import Header from './home/Header'
import About from './home/About'
import Guidelines from './home/Guidelines'
import Info from './home/Info'

const Home = () => {
  return (
    <>
      <Header title='Welcome to nysc portal'/>
      <main className='container my-5 '>
        <Registration/>
        <About/>
        <hr className='w-75 opacity-75 mx-auto d-none d-lg-block mt-2 mb-4'/>
        <Guidelines/>
        <hr className='w-75 opacity-75 mx-auto d-none d-lg-block mt-2 mb-4'/>
        <Info/>
      </main>
      
    </>
  )
}

export default Home
