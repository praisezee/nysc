import React from 'react'
import logo from '../img/NYSC_LOGO.png'
import { Link } from 'react-router-dom'
import {BsList,BsDot} from 'react-icons/bs'
import ExpandMenu from './headers/ExpandMenu'

const Header = () => {
  return (
    <header className='sticky-top'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light shadow sticky'>
      <div className="container-lg d-flex">
        <Link to='/' className='navbar-brand d-lg-flex w-25 my-0 py-0'>
          <img src={logo} alt="" className='nav-link w-25 expand-image'/>
          <div className='d-none d-lg-block w-75 my-auto mx-2 slide-in'>
            <p className='text-success text-uppercase h5'>national youth service corp</p>
            <p className='text-danger text-uppercase text-center mx-2'><BsDot className='text-bold h4'/>service and humanity<BsDot className='text-bold h4'/></p>
          </div>
        </Link>
        <button className='navbar-toggler'data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <BsList className='rounded navbar-toggler-icon' role='button' />
        </button>
        <div className="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">
          <ExpandMenu/>
        </div>
      </div>
      </nav>
    </header>
  )
}

export default Header
