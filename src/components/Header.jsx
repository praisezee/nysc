import React from 'react'
import logo from '../img/NYSC_LOGO.png'
import {BsDot} from 'react-icons/bs'
import ExpandMenu from './headers/ExpandMenu'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {

  
  return (
      <Navbar collapseOnSelect expand="lg" bg='light' varient='light' className='sticky-top px-5 shadow'>
      <Navbar.Brand className='d-flex'>
        <a href='/' data-rr-ui-event-key='/' className="nav-link d-flex w-50">
        <img src={logo} alt="" className='nav-link img-fluid w-25 expand-image'/>
        <div className='d-none d-lg-block w-75 my-auto mx-2 slide-in'>
          <p className='text-success text-uppercase h5'>national youth service corp</p>
          <p className='text-danger text-uppercase text-center mx-2'><BsDot className='text-bold h4'/>service and humanity<BsDot className='text-bold h4'/></p>
        </div>
        
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav" className="d-lg-flex justify-content-end">
        <Nav >
          <ExpandMenu/>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
