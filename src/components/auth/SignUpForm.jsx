import React from 'react'
import {BsEnvelope,BsLock} from 'react-icons/bs'
import Button from './Button'
import { Row,Col, FormControl, FloatingLabel } from 'react-bootstrap'

const SignUpForm = ({handleSubmit,isSignUp}) => {
  <form >
      <div className=" col-3 form-floating mb-3">
        <input type="email" placeholder='name@example.com' className="form-control" id="floatingInput email" required/>
        <label htmlFor="email" className="floatingInput"><BsEnvelope className='mx-2 h5 my-auto'/>Email</label>
      </div>
      <div className="col-3 form-floating mb-3">
        <input type="password" placeholder='Enter Your Password' className="form-control" id="floatingInput password" required />
        <label htmlFor="password" className="floatingInput"><BsLock className='mx-2 h5 my-auto'/>Password</label>
      </div>
      <div className="col-3 form-floating mb-3">
        <input type="password" placeholder='Enter Your Password' className="form-control" id="floatingInput password" required />
        <label htmlFor="password" className="floatingInput"><BsLock className='mx-2 h5 my-auto'/>Password</label>
      </div>
      <Button title='resume' isLogged={isSignUp}/>
    </form>
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
