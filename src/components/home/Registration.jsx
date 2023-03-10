import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { BsDoorOpen } from 'react-icons/bs'


const Registration = () => {
  const [registration] = useState(false)
  const [batch] = useState('')
  const date = new Date()
  const year = date.getFullYear()  

  return (
      <section className='col-lg-6 mx-auto my-5'>
        {!registration?(
          <div className='my-4 p-3  text-center border rounded'>
            <p className='my-3 h5 text-capitalize'>No active Registration</p>
          </div>
        ) :(
        <Link to='register' className='mt-4 mb-2 bg-danger text-white nav-link text-center border rounded'>
          <p className='my-3 h5 text-capitalize'>Mobilization Batch {batch}, {year}</p>
          <p className='bg-light text-danger w-75 mx-auto rounded'>From</p>
        </Link>
        )
        }
        <Link to='login' className='nav-link text-center my-2 p-2 '>
          <BsDoorOpen className='big border rounded-circle'/>
        </Link>
        <Link to='remobilization' className='nav-link text-center border rounded mt-2 mb-5 p-3'>
          <p className='text-danger text-capitalize h5 my-2'>New: online application for remobilization</p>
          <p className='text-info text-capitalize'>click here to apply for remobilization</p>
        </Link>
      </section>
  )
}

export default Registration
