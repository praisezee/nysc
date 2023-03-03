import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <footer className='fixed-bottom container-fluid mx-auto text-center bg-success text-white pt-1 mt-0'>
      <p className='my-0 pt-3 mb-0 d-none d-lg-block'>Designed by <Link to='https://wa.me/message/DE46ZCGRKDXFP1' className='text-uppercase link-light'>Apus Industries</Link></p>
      <p className='text-capitalize mt-1'>copyright &copy; {year} national youth service corps. all right reserved.| privacy policy</p>
    </footer>
  )
}

export default Footer
