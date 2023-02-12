import React from 'react'

const GuidelineModal = ({Link}) => {
  return (
      <section className="modal expand-modal" tabindex="-1" id='guideline'>
      <section className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <section className="modal-content">
          <article className="modal-header">
            <p className="h4 text-capitalize modal-title" id="guideline">How to make payment on <span className="text-uppercase">nysc</span> portal using <span className="text-uppercase">remita</span> pay engine</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </article>
          <article className="modal-body">
            <section>
              <p className='mx-auto'>From the Home page, Click "<strong className='text-capitalize'>Already Have Account click here to login</strong>". Enter your email and password to login</p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p className='mx-auto'>Click on "<strong className='text-capitalize'>Click here to make payment</strong>" after successful login</p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p className='mx-auto'>When payment confirmation page is displayed click on "<strong className='text-capitalize'>proceed to payment</strong>"
              </p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p className='mx-auto'>
                You get redirected to <span className="text-uppercase">remita</span> payment engine with various payment options
              </p>
            </section>
            <hr className="opacity-100 w-100 mx-auto" />
            <section>
              <p className="text-danger text-center text-uppercase h6">For cards and wallet payments</p>
              <p>Click on "<strong>Pay now with card or wallets</strong>" </p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p>Provide card details, pin and whatever other information required</p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p>On successful transaction, the redirect URL is loaded with the status of the transaction</p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p>This completes the <span className="text-uppercase">remita</span> cards/wallet payment process</p>
            </section>
            <hr className="opacity-100 w-100 mx-auto" />
            <section>
              <p className="text-danger text-center text-uppercase h6">To pay at any bank branch</p>
              <p>Copy the <strong className='text-uppercase'>rrr</strong> number generated and take to any approved banks</p>
              <hr className="opacity-50 w-75 mx-auto" />
              <p>After making the payment, the payment status can be checked on this URL: <Link to='payments' className='text-info'>click here</Link> </p>
            </section>
          </article>
          <article className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
          </article>
        </section>
      </section>
    </section>
  )
}

export default GuidelineModal
