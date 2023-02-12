import React from 'react'
import {BsEnvelope,BsLock} from 'react-icons/bs'
import Button from './Button'

const LoginForm = ({isLogged, handleSubmit}) => {
  return (
      <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input type="email" placeholder='name@example.com' className="form-control" id="floatingInput email" required/>
        <label htmlFor="email" className="floatingInput"><BsEnvelope className='mx-2 h5 my-auto'/>Email</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" placeholder='Enter Your Password' className="form-control" id="floatingInput password" required />
        <label htmlFor="password" className="floatingInput"><BsLock className='mx-2 h5 my-auto'/>Password</label>
      </div>
      <Button title='resume' isLogged={isLogged}/>
    </form>
  )
}

export default LoginForm
