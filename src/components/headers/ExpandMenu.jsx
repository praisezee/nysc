import React from 'react'
import { BsPersonCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ExpandMenu = () => {
  return (
    <ul className='navbar-nav mb-2 mb-lg-0'>
            <li className='nav-item px-1 h5'>
              <Link to='/' className='nav-link' id='collapsible-navbar-dropdown'>Home</Link>
            </li>
            <li className='nav-item px-1 h5'>
              <Link to='/' className='nav-link'>Payment status</Link>
            </li>
            <li className='nav-item px-1 h5'>
              <Link to='/' className='nav-link'>Contact Us</Link>
            </li>
            <li className='nav-item px-1'>
              <Link to='login' className='nav-link'>
                <BsPersonCircle className='h2'/>
                <span className='mx-1 d-lg-none h5 text-bold'>Login</span>
              </Link>
            </li>
          </ul>
  )
}

export default ExpandMenu
