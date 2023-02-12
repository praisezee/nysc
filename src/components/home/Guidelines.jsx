import React from 'react'
import graduate from '../../img/graduate.png'
import faq from '../../img/FAQ.png'
import payment from '../../img/payment.png'
import canlendar from '../../img/calendar.png'
import Article from './Article'


const Guidelines = () => {


  return (
    <section className='row mt-5 mb-3'>
      <p className="h3">Guidelines</p>
      <hr className='opacity-50 border border-2 border-dark'/>
      <Article 
        src={graduate} 
        title={
          <>Foreign <abbr className='initialism strong' title="Prospective Corp Member">P.C.M</abbr> Requirement
          </>
        }
        id='#foreign'
        />
      <Article id='#guideline' src={payment} title='Guidelines on Payment'/>
      <Article id='#dob' src={canlendar} title='Change of Date of Birth'/>
      <Article id='#faq' src={faq} title='FAQs'/>
    </section>
  )
}

export default Guidelines
