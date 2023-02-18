import React from 'react'
import { ListGroup, ListGroupItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sidebar = ({show, handleClose}) => {
  return (
      <Offcanvas show={show} onHide={handleClose} scroll backdrop>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle className='text-uppercase mx-auto ff-monospace'>Welcome Back!</OffcanvasTitle>
      </OffcanvasHeader>
      <hr className="opacity-100 w-75 mx-auto" />
      <OffcanvasBody>
        <ListGroup variant='flush'>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='.' className='nav-link my-2 mh-100' onClick={handleClose}>My Dashboard</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='password-update' className='nav-link my-2 mh-100' onClick={handleClose}>Change Password</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='course-correction' className='nav-link my-2 mh-100' onClick={handleClose}>Course Correction</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='ppa-letter' className='nav-link my-2 mh-100' onClick={handleClose}>PPA Letter</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='clearance' className='nav-link my-2 mh-100' onClick={handleClose}>LGA clearance</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='disciplinary-case' className='nav-link my-2 mh-100' onClick={handleClose}>Disciplinary Case</Link>
          </ListGroupItem>
          <ListGroupItem variant='light' className='py-3' action>
            <Link to='#' className='nav-link my-2 mh-100' onClick={handleClose}>Log Out</Link>
          </ListGroupItem>
        </ListGroup>
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default Sidebar
