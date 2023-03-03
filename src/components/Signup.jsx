import React, { useState } from 'react'
import SignUpForm from './auth/SignUpForm'

const Signup = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setIsSignUp(true)
    /* setTimeout(()=>{
      setIsLogged(false)
    },9000) */
  }
  return (
    <div className='mt-5 pt-5'>
      <div className="container-fluid img-bg">
        <main className="d-flex justify-content-center align-items-center h-75">
          <div className='col-12 col-md-10 text-center col-lg-6 px-3 border rounded shadow py-4 bg-opacity-75 bg-light'>
          {isSignUp?(
          <div className="justify-content-center d-flex mb-1">
            <div className="spinner-grow text-success mx-1">
                <span className='visual-hidden'></span>
              </div>
            <div className="spinner-grow text-success mx-1">
                <span className='visual-hidden'></span>
              </div>
            <div className="spinner-grow text-success mx-1">
                <span className='visual-hidden'></span>
              </div>
            </div>
            ): 
            null
            }
            <div className='alert alert-success py-2 text-center'>
              <p className='h5'>Create New User</p>
            </div>
            <SignUpForm handleSubmit={handleSubmit} isSignUp={isSignUp}/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Signup
