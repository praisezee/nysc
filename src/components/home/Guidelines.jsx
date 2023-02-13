import React from 'react'
import PaymentModal from './PaymentModal'
import Faq from './Faq'
import ForeginModal from './ForeginModal'
import Dob from './Dob'


const Guidelines = () => {


  return (
    <section className='row mt-5 mb-3'>
      <p className="h3">Guidelines</p>
      <hr className='opacity-50 border border-2 border-dark'/>
      <div className="container text-center">
        <div className="row g-3">
          <ForeginModal/>
          <PaymentModal/>
          <Dob/>
          <Faq/>
        </div>
      </div>
    </section>
  )
}

export default Guidelines
