import React from 'react'
import  Button from './auth/Button';
import remita from '../img/remita.png'

const Payment = () => {
  return (
    <div className="container-fluid height-100">
      <main className="d-flex justify-content-center align-items-center h-75">
      <div className='col-10 col-md-8 text-center col-lg-4 px-3 border rounded shadow py-4 bg-opacity-75 bg-light'>
        <div className='alert alert-success py-2 text-start'>
          <p className='h5'>Transaction status</p>
        </div>
        <form>
          <label htmlFor="transaction" className='text-capitalize text-center h5'>transaction ID/email:</label>
          <input type="text" name="tansaction" id="transaction" className='form-control border-1 mb-2' />
          <Button title='verify' />
        </form>
        <img src={remita} alt="" className="img-fluid pt-3" />
      </div>
    </main>
    </div>
  )
}

export default Payment
