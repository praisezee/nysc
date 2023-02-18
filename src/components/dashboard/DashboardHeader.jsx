import React, { useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { BsChevronDoubleRight } from 'react-icons/bs'
import Header from '../home/Header'
import Sidebar from './Sidebar'

const DashboardHeader = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s)=> !s)
  return (
    <>
      <hr className='text-danger opacity-100 my-0 border border-danger border-1'/>
      <Header title='Welcome to your dashboard'/>
      <nav className="navbar navbar-light bg-light shadow">
        <section className='container-fluid'>
        <OverlayTrigger placement='top' overlay={<Tooltip id='button-tooltip-2'>Open dashboard menu</Tooltip>}>
          {({ref,...triggerHandler})=>(
            <Button size='lg' variant='light' className='shadow fw-bold  align-items-center' onClick={toggleShow} {...triggerHandler}>
              Menu
              <BsChevronDoubleRight className='fw-bolder' ref={ref}/>
            </Button>
          )}
        </OverlayTrigger>
        <div className="d-flex align-items-center">
          
          <img src="./logo.svg" alt="" className="rounded-circle " height='50' loading='lazy' />
        </div>
      </section>
      </nav>
      <Sidebar show={show} handleClose={handleClose}/>
    </>
  )
}

export default DashboardHeader
