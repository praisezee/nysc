import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PersonalInformation from './PersonalInformation'

const HomeDashboard = () => {
  const months = ['January','February','March','April','May','June','July','August','September','october','november', 'december']
  const weekDays = [ 'sunday','Monday', 'tuesday','wednesday', 'thursday', 'friday', 'saturday']
  const date = new Date()
  const day = date.getDate()
  const year = date.getFullYear()
  const dayOfWeek = weekDays[date.getDay()]
  const month = months[date.getMonth()].toLocaleLowerCase()

  return (
    <div className='dashboard container-fluid'>
      <Row className='my-2'g={2}>
        <Col xs={10} md={6} className='mx-auto'>
          <p className="bg-success text-white text-center rounded">
            folorunsopraise580@gmail.com
          </p>
        </Col>
        <Col xs={10} md={6} className='mx-auto'>
          <p className='text-capitalize fw-bold text-center'>
            today's date: {dayOfWeek}, {month} {day}, {year}
          </p>
        </Col>
      </Row>
      <Row>
        <PersonalInformation/>
      </Row>
    </div>
  )
}

export default HomeDashboard
