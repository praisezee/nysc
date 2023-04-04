import React from 'react'
import { Alert, Container, Form, FormControl, Row, Col, FloatingLabel, Button } from 'react-bootstrap';

const PasswordUpdate = () =>
{
  const handleChange = () =>
  {
    console.log('changed')
  }

  return (
    <div className='py-2'>
      <Alert variant='success' className=' mx-auto text-center fw-bold fs-4 text-capitalize'>
        Change password
        <hr className="w-25 mx-auto opacity-1 mt-2 mb-0" />
      </Alert>
      <Container>
        <Form>
          <Row className='g-2 my-1'>
            <Col>
              <FloatingLabel controlId='floatingInputGrid' label="Email" >
                <FormControl placeholder='Enter your email address' type='email'disabled/>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInputGrid' label="Password" >
                <FormControl placeholder='Enter your email address' type='password' disabled/>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className='g-2 my-1'>
            <Col>
              <FloatingLabel controlId='floatingInputGrid' label="New Password" >
                <FormControl placeholder='Enter your email address' type='password'/>
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInputGrid' label="Confirm Password" >
                <FormControl placeholder='Enter your email address' type='password'/>
              </FloatingLabel>
            </Col>
          </Row>
          <Button variant='success' className='my-1 float-end text-capitalize fw-bold' onClick={handleChange}>
            change
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default PasswordUpdate
