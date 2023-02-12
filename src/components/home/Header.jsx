import React from 'react'

const Header = ({title}) => {
  return (
    <div className='w-100 bg-success'>
      <hr className='text-danger border-danger border border-1 opacity-100 mt-1 h2'/>
      <p className="text-center text-white text-uppercase h2 mt-1 slide-in">
        {title}
      </p>
    </div>
  )
}

export default Header
