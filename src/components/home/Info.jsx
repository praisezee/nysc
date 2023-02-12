import React from 'react'

const Info = () => {
  return (
    <section className='row my-5'>
      <p className="h3">Important Information</p>
      <hr className='opacity-50 border border-2 border-dark'/>
      <article className='col-6 border  rounded my-auto'>
        <p className="text-info h6">check senate list or equivalent</p>
        <p>view graduation list</p>
      </article>
      <article className='col-6 my-auto'>
        <div className='border rounded px-3 my-2'>
          <p className='text-info'>Biometric Instructions</p>
        </div>
        <div className='border rounded px-3 my-2'>
          <p className="text-info">Accredited Institutions/ Programmes</p>
        </div>
      </article>
    </section>
  )
}

export default Info
