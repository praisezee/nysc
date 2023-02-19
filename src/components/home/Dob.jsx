import React, { useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Modal from 'react-bootstrap/Modal';

const Dob=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      
    <>
      <AnimationOnScroll animateIn='expand-out' animateOnce className="p-2 col-6  col-lg-3 text-center">
      <article  role='button'  onClick={handleShow}>
          <div className="shadow border rounded p-1 my-2">
          <p className="text-center h6 text-capitalize mx-auto my-2">Change of date of birth</p>
          <hr className='opacity-50 mx-auto w-50'/>
          <img src='https://res.cloudinary.com/dnqjgz03q/image/upload/v1676300530/Nysc/calendar_tyk5yo.png' alt="" className='img-fluid mx-auto my-3'/>
          </div>
        </article> 
      </AnimationOnScroll>

      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
        <Modal.Title className='text-capitalize' >
            procedures for correction of date of birth/course of study by <abbr title="Prospective Corp Member">P.C.Ms'</abbr> on the platform
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong className='text-capitalize'>henceforth</strong>, information from the <strong className="text-capitalize">West african examinatioin council (WAEC)</strong> will no longer be used to effect changes immediately on the NYSC online Registration. The new procedure for the <abbr title="Prospective Corp Member">P.C.M</abbr> is to submit</p>
          <ul className="my-list">
            <li>Login to your dashboard and <strong>click the link to Date of Birth</strong></li>
            <li>Enter WAEC verification PIN, select WAEC Type, Year of exam and your Examination Number</li>
            <li>Click on the verify button</li>
            <li>Click on <strong>Submit or Cancel</strong></li>
          </ul>
          <p className='mb-0 mt-3'><strong>The procedure to change Course of Study is</strong></p>
          <ul className="my-list mt-0">
            <li>Login to your dashboard and <strong>click the link for correction of Course of Study</strong></li>
            <li>Select Course of study</li>
            <li>Click <strong>Submit</strong></li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
        <button type="button" className="btn btn-success" onClick={handleClose} >Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dob;