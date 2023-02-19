import React from 'react'
import {BsDot} from 'react-icons/bs'
import ExpandMenu from './headers/ExpandMenu'
import { Nav, Navbar,Container,NavbarBrand } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { Link } from 'react-router-dom'

const Header = () => {

  
  return (
    <Navbar bg='light' sticky='top' className='shadow' collapseOnSelect expand="lg" variant='light'>
    <Container>
      <NavbarBrand>
        <Link to='/'>
        <img src="/logo.svg" alt="" width='60' height='60' className='d-inline-block align-top expand-img'/>{''}
        <div className='d-none d-lg-inline-block w-75 my-auto mx-2 slide-in'>
          <p className='text-success text-uppercase h5'>national youth service corp</p>
          <p className='text-danger text-uppercase text-center mx-2'><BsDot className='text-bold h4'/>service and humanity<BsDot className='text-bold h4'/></p>
        </div>
        </Link>
  
      </NavbarBrand>
      <NavbarToggle aria-controls='responsive-navbar-nav'/>
      <NavbarCollapse id='responsive-navbar-nav'>
      <div className="me-auto"></div>
      <Nav>
          <ExpandMenu/>
        </Nav>
      </NavbarCollapse>
    </Container>
  </Navbar>
  )
}

export default Header
