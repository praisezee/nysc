import React from 'react'

const Button = ({isLogged, title}) => {
  return (
    <>
      {isLogged ? (
        <button className="float-end btn btn-success btn-sm w-25" disabled>
          <div className="spinner-border text-light">
            <span className='visual-hidden'></span>
          </div>
        </button>
      ): (
        <button type='submit' className='float-end btn btn-success text-capitalize'>
          {title}
        </button>
      )
      }
    </>
  )
}

export default Button
