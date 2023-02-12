import React from 'react'

const Header = ({title}) => {
  return (
    <div className='w-100 bg-success'>
      <p className="text-center text-white text-uppercase h2 mt-1 slide-in">
        {title}
      </p>
    </div>
  )
}

export default Header
