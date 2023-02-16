import React from 'react'
import Button from './Button'
import { Row,Col, FormControl, FloatingLabel } from 'react-bootstrap'

const SignUpForm = ({handleSubmit,isSignUp}) => {
  return (
      <form onSubmit={handleSubmit}>
        <Row className='g-2'>
        <Col>
          <FloatingLabel controlId='floatingInputGrid' label="Surname" >
            <FormControl placeholder='Enter your surname' type='text' autoFocus />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId='floatingInputGrid' label="Firstname" >
            <FormControl placeholder='Enter your firstname' type='text'/>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId='floatingInputGrid' label="Lastname" >
            <FormControl placeholder='Enter your lastname' type='text'/>
          </FloatingLabel>
        </Col>
      </Row>
      <Row className='g-2 my-1'>
      <Col>
          <FloatingLabel controlId='floatingInputGrid' label="Email" >
            <FormControl placeholder='Enter your email address' type='email'/>
          </FloatingLabel>
        </Col>
      <Col>
          <FloatingLabel controlId='floatingInputGrid' label="Email" >
            <FormControl placeholder='Enter your email address' type='email'/>
          </FloatingLabel>
        </Col>
      </Row>
      <Button title='resume' isLogged={isSignUp}/>
      </form>
  )
}

export default SignUpForm
