import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="row my-4">
      <section className='container-fluid text-center'>
      <div className="row g-2">
        <Link to='https://verify.nysc.org.ng' className='p-1 col-8 mx-auto col-lg-3 text-center my-3 nav-link shadow'>
          <AnimationOnScroll animateOnce animateIn='slide-down'>
          <article className=" p-3">
            <img src='https://res.cloudinary.com/dnqjgz03q/image/upload/v1676300530/Nysc/2945066_28518-removebg-preview_avha20.png' alt="" className='img-fluid mt-1 rounded w-75 mt-0'/>
            <div className="text-center border rounded alert alert-success py-0 my-0">
              <p className="text-capitalize text-success my-3">Verify Certificates</p>
            </div>
            <p className="text-info text-center">Discharge, Exclusion and Exemption</p>
        </article>
          </AnimationOnScroll>
        </Link>
        
        <Link to='verify-payment' className='p-1 col-8 mx-auto col-lg-3 text-center my-3 nav-link shadow border rounded'>
          <AnimationOnScroll animateOnce animateIn='slide-up'>
            <article className="p-3">
              <img src="https://res.cloudinary.com/dnqjgz03q/image/upload/v1676319691/card_nxiru3.png" alt="" className='img-fluid mt-1 rounded w-50 mt-0'/>
              <div className="text-center border rounded alert alert-success py-0 my-0">
                <p className="text-capitalize text-success my-3">Payment Status</p>
              </div>
              <p className="text-info text-center">To check your Payment Status</p>
            </article>
          </AnimationOnScroll>
        </Link>
        <Link to='https://nysc.gov.ng' className='p-2 col-8 mx-auto col-lg-3 text-center my-3 nav-link border rounded shadow'>
          <AnimationOnScroll animateOnce animateIn='slide-down'>
            <article className="p-3">
              <img src='https://res.cloudinary.com/dnqjgz03q/image/upload/v1676300529/Nysc/home-interface-button-symbol_vtljpe.png' alt="" className='img-fluid mt-1 rounded w-50'/>
              <div className="text-center border rounded alert alert-success py-0 my-0">
                <p className="text-capitalize text-success my-3">Visit the main site</p>
              </div>
              <p className="text-info text-center">Visit NYSC website for information and updates</p>
            </article>
          </AnimationOnScroll>
        </Link>
      </div>
    </section>
    </div>
  )
}

export default About
