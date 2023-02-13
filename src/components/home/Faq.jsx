import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import faq from '../../img/FAQ.png'
import {Collapse} from 'react-bootstrap'

const Faq=()=> {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      
    <>
      <article className="p-2 col-6  col-lg-3 text-center expand-out" role='button'  onClick={handleShow}>
          <div className="shadow border rounded p-1 my-2">
          <p className="text-center h6 text-capitalize">Frequently Asked Questions</p>
          <hr className='opacity-50 mx-auto w-50'/>
          <img src={faq} alt="" className='img-fluid mx-auto my-auto'/>
          </div>
        </article> 

      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
        <Modal.Title>
        FREQUENTLY ASKED QUESTIONS ON NYSC'S ONLINE REGISTRATION
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="alert alert-success border rounded">
              <p className="h5">Prospective corps members and other critical stakeholders have been asking certain important questions and seeking clarifications on the online registration initiative recently introduced by the NYSC. Below are some of those questions and the answers to them:</p>
            </div>
            <ol>
              <li>
                <p className="bg-secondary px-2 bg-opacity-25 broder rounded" aria-expanded={open} onClick={()=>setOpen(!open)} role='button' aria-controls='whytopay'>Why are Nigerian youths being asked to pay to serve their country?</p>
                <Collapse in={open}>
                  <div id="whytopay">
                    <div className="card card-body mb-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                    </div>
                  </div>
                </Collapse>
              </li>
              <li>
                <p className="bg-secondary px-2 bg-opacity-25 broder rounded" aria-expanded={open} onClick={()=>setOpen(!open)} role='button' aria-controls='callupletter'>Why are corps members being forced to pay for their call-up letters?</p>
                <div className="collapse" id="callupletter">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                </div>
              </li>
              <li>
                <p className="bg-secondary px-2 bg-opacity-25 broder rounded" data-bs-toggle='collapse' role='button' data-bs-target='#amountpaid'>Why ask prospective corps members to pay N3000 just to print call-up letters?</p>
                <div className="collapse" id="amountpaid">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                </div>
              </li>
              <li>
                <p className="bg-secondary px-2 bg-opacity-25 broder rounded" data-bs-toggle='collapse' role='button' data-bs-target='#doubt'>Is the initiative not extortionist and insensitive?</p>
                <div className="collapse" id="doubt">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                </div>
              </li>
              <li>
                <p className="bg-secondary px-2 bg-opacity-25 broder rounded" data-bs-toggle='collapse' role='button' data-bs-target='#quo'>Why not maintain the status quo?</p>
                <div className="collapse" id="quo">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                </div>
              </li>
            </ol>
            </Modal.Body>
        <Modal.Footer>
        <button type="button" className="btn btn-success" onClick={handleClose} >Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Faq;