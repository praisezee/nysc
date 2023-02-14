import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Collapse} from 'react-bootstrap'

const Faq=()=> {
  const [show, setShow] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      
    <>
      <article className="p-2 col-6  col-lg-3 text-center expand-out" role='button'  onClick={handleShow}>
          <div className="shadow border rounded p-1 my-2">
          <p className="text-center h6 text-capitalize mx-auto my-2">Frequently Asked Questions</p>
          <hr className='opacity-50 mx-auto w-50'/>
          <img src='https://res.cloudinary.com/dnqjgz03q/image/upload/v1676300530/Nysc/FAQ_mhyzjc.png' alt="" className='img-fluid mx-auto my-3'/>
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
                <p className="alert alert-secondary px-2 bg-opacity-25 broder rounded" aria-expanded={open1} onClick={()=>setOpen1(!open1)} role='button' aria-controls='whytopay'>Why are Nigerian youths being asked to pay to serve their country?</p>
                <Collapse in={open1}>
                  <div id="whytopay">
                    <div className="card card-body mb-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                    </div>
                  </div>
                </Collapse>
              </li>
              <li>
                <p className="alert alert-secondary px-2 bg-opacity-25 broder rounded" aria-expanded={open2} onClick={()=>setOpen2(!open2)} role='button' aria-controls='callupletter'>Why are corps members being forced to pay for their call-up letters?</p>
                <Collapse in={open2}>
                  <div id="callupletter">
                  <div className="card card-body mb-2" >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                  </div>
                </Collapse>
              </li>
              <li>
                <p className="alert alert-secondary px-2 bg-opacity-25 broder rounded" role='button'aria-expanded={open3} onClick={()=>setOpen3(!open3)} aria-controls='amountpaid'>Why ask prospective corps members to pay N3000 just to print call-up letters?</p>
                <Collapse in={open3}>
                  <div id="amountpaid">
                  <div className="card card-body mb-2" >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                  </div>
                </Collapse>
              </li>
              <li>
                <p className="alert alert-secondary px-2 bg-opacity-25 broder rounded" role='button'aria-expanded={open4} onClick={()=>setOpen4(!open4)} aria-controls='doubt'>Is the initiative not extortionist and insensitive?</p>
                <Collapse in={open4}>
                  <div id="doubt">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                  </div>
                </Collapse>
              </li>
              <li>
                <p className="alert alert-secondary px-2 bg-opacity-25 broder rounded" role='button'aria-expanded={open5} onClick={()=>setOpen5(!open5)} aria-controls='quo'>Why not maintain the status quo?</p>
                <Collapse in={open5}>
                  <div id="quo">
                  <div className="card card-body mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae saepe porro ullam aliquid? Aut, debitis. Quibusdam ratione neque expedita! Doloremque suscipit vel accusantium itaque vitae molestias laudantium autem aliquam quas.
                  </div>
                  </div>
                </Collapse>
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