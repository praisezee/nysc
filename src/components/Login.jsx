import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './auth/LoginForm'

const Login = () => {
  const [isLogged, setIsLogged] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setIsLogged(true)
    /* setTimeout(()=>{
      setIsLogged(false)
    },9000) */
  }
  return (
    <main className="row w-100 img-bg">
      <div className='col-8 col-lg-4 mx-auto my-auto border rounded shadow py-5 bg-opacity-75 bg-light'>
      {isLogged?<div className="justify-content-center d-flex mb-1">
        <div className="spinner-grow text-success mx-1">
            <span className='visual-hidden'></span>
          </div>
        <div className="spinner-grow text-success mx-1">
            <span className='visual-hidden'></span>
          </div>
        <div className="spinner-grow text-success mx-1">
            <span className='visual-hidden'></span>
          </div>
        </div>: null}
        <div className='alert alert-success py-2 '>
          <p className='h5'>Existing User Login</p>
        </div>
        <LoginForm handleSubmit={handleSubmit} isLogged={isLogged}/>
        <Link className='nav-link my-auto w-50 text-center' to='/'>
          <p className="mx-auto text-primary h6">Forgot Password or E-mail?</p>
        </Link>
      </div>
      

    </main>
  )
}

export default Login
