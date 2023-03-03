import React, { useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsList } from 'react-icons/bs'
import Header from '../home/Header'
import Sidebar from './Sidebar'

const DashboardHeader = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s)=> !s)
  return (
    <div className='mt-5 pt-5'>
      <hr className='text-danger opacity-100 my-0 border border-danger mt-lg-3 py-0'/>
      <Header title='Welcome to your dashboard'/>
      <nav className="navbar navbar-light bg-light shadow">
        <section className='container-fluid'>
        <OverlayTrigger placement='top' overlay={<Tooltip id='button-tooltip-2'>Open dashboard menu</Tooltip>}>
          {({ref,...triggerHandler})=>(
            <Button size='lg' variant='light' className='shadow fw-bold  align-items-center' onClick={toggleShow} {...triggerHandler}>
              <BsList className='h4 fw-bold my-auto mx-auto' ref={ref}/>
            </Button>
          )}
        </OverlayTrigger>
        <div className="d-flex align-items-center">
          
          <img src="./logo.svg" alt="" className="rounded-circle " height='50' loading='lazy' />
        </div>
      </section>
      </nav>
      <Sidebar show={show} handleClose={handleClose}/>
    </div>
  )
}

export default DashboardHeader
