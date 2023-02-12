import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsDoorOpen } from 'react-icons/bs'

const Registration = () => {
  const [registration] = useState(false)
  const [batch] = useState('')
  const date = new Date()
  const year = date.getFullYear()  

  return (
      <section className='col-lg-6 mx-auto'>
        {!registration?(
          <div className='my-3  text-center border rounded'>
            <p className='my-3 h5 text-capitalize'>No active Registration</p>
          </div>
        ) :(
        <Link to='registration' className='my-3 bg-danger text-white nav-link text-center border rounded'>
          <p className='my-3 h5 text-capitalize'>Mobilization Batch {batch}, {year}</p>
          <p className='bg-light text-danger w-75 mx-auto rounded'>From</p>
        </Link>
        )
        }
        <Link to='login' className='nav-link text-center my-3'>
          <BsDoorOpen className='h2'/>
        </Link>
        <Link to='remobilization' className='nav-link text-center border rounded my-3'>
          <p className='text-danger text-capitalize h5'>New: online application for remobilization</p>
          <p className='text-info text-capitalize'>click here to apply for remobilization</p>
        </Link>
      </section>
  )
}

export default Registration
