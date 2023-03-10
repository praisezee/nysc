import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from './auth/LoginForm'

const Login = () => {
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    setIsLogged(true)
    setTimeout(()=>{
      setIsLogged(false)
      navigate('../dashboard')
    },3000)
  }
  return (
    <div className='mt-5 pt-5'>
      <div className="container-fluid img-bg">
        <main className="d-flex justify-content-center align-items-center h-75">
          <div className='col-10 col-md-8 text-center col-lg-4 px-3 border rounded shadow py-4 bg-opacity-75 bg-light'>
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
            <div className='alert alert-success py-2 text-start'>
              <p className='h5'>Existing User Login</p>
            </div>
            <LoginForm handleSubmit={handleSubmit} isLogged={isLogged}/>
            <Link className='nav-link text-start my-auto w-50' to='/'>
              <p className="mx-auto text-primary h6">Forgot Password or E-mail?</p>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Login
