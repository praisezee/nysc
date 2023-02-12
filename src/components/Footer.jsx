import React from 'react'

const Footer = () => {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <footer className='fixed-bottom bpcontainer-fluid mx-auto text-center bg-success text-white'>
      <p className='h6'>Designed by <span className='text-uppercase'>Apus Industries</span></p>
      <p className='text-capitalize'>copyright &copy; {year} national youth service corps. all right reserved.| privacy policy</p>
    </footer>
  )
}

export default Footer
