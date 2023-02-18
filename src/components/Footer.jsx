import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <footer className='fixed-bottom container-fluid mx-auto text-center bg-success text-white py-0'>
      <p className='h6'>Designed by <Link to='https://wa.me/message/DE46ZCGRKDXFP1' className='text-uppercase link-light'>Apus Industries</Link></p>
      <p className='text-capitalize'>copyright &copy; {year} national youth service corps. all right reserved.| privacy policy</p>
    </footer>
  )
}

export default Footer
