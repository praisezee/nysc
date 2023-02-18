import React from 'react'
import { BsPersonCircle} from 'react-icons/bs'

const ExpandMenu = () => {
  
  return (
    <div className='navbar-nav mb-lg-0'>
      <a href='/' data-rr-ui-event-key='/' className='nav-link' id='collapsible-navbar-dropdown'>Home</a>
      <a href='verify-payment' data-rr-ui-event-key='/'  className='nav-link'>Payment status</a>
      <a href='/' data-rr-ui-event-key='/'  className='nav-link justify-content-center'>Contact Us</a>
      <a href='/login' data-rr-ui-event-key='/login'  className='nav-link'>
        <BsPersonCircle className='h2'/>
        <span className='mx-1 d-lg-none h5 text-bold'>Login</span>
      </a>
    </div>
  )
}

export default ExpandMenu
