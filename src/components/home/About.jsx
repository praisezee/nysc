import React from 'react'
import Cert from '../../img/cert.png'
import Card from '../../img/card.png'
import Home from '../../img/home.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
      <section className='row'>
        
        <Link to='registration' className='col-8 col-lg-4  my-3  nav-link text-center g-4 col-8 col-lg-4 mx-auto '>
        <article className="slide-down border rounded p-3 shadow">
        <img src={Cert} alt="" className='img-fluid mt-1 rounded w-75 mt-0'/>
            <div className="text-center border rounded alert alert-success py-0 my-0">
              <p className="text-capitalize text-success my-3">Verify Certificates</p>
            </div>
            <p className="text-info text-center">Discharge, Exclusion and Exemption</p>
        </article>
        </Link>
        
        <Link to='/' className='col-8 col-lg-4  my-3  nav-link text-center g-4 col-8 col-lg-4 mx-auto '>
          <article className="slide-up border rounded p-3 shadow">
            <img src={Card} alt="" className='img-fluid mt-1 rounded w-50 mt-0'/>
            <div className="text-center border rounded alert alert-success py-0 my-0">
              <p className="text-capitalize text-success my-3">Payment Status</p>
            </div>
            <p className="text-info text-center">To check your Payment Status</p>
          </article>
        </Link>
        <Link to='/' className='col-8 col-lg-4  my-3  nav-link text-center g-4 col-8 col-lg-4 mx-auto '>
          <article className="slide-down border rounded p-3 shadow">
            <img src={Home} alt="" className='img-fluid mt-1 rounded w-50'/>
            <div className="text-center border rounded alert alert-success py-0 my-0">
              <p className="text-capitalize text-success my-3">Visit the main site</p>
            </div>
            <p className="text-info text-center">Visit NYSC website for information and updates</p>
          </article>
        </Link>
    </section>
  )
}

export default About
