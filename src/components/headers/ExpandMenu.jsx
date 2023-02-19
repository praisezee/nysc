import React from 'react'
import { NavLink } from 'react-bootstrap'
import { BsPersonCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ExpandMenu = () => {
  
  return (
    <>
      <NavLink eventKey={1}>
        <Link to='/' className='nav-link'>Home</Link>
      </NavLink>
      <NavLink eventKey={2}>
        <Link to='verify-payment'  className='nav-link'>Payment status</Link>
      </NavLink>
      <NavLink eventKey={3}>
        <Link to='/'  className='nav-link justify-content-center'>Contact Us</Link>
      </NavLink>
      <NavLink eventKey={4}>
        <Link to='/login'  className='nav-link'>
          <BsPersonCircle className='h2'/>
          <span className='mx-1 d-lg-none h5 text-bold'>Login</span>
        </Link>
      </NavLink>
    </>
  )
}

export default ExpandMenu
