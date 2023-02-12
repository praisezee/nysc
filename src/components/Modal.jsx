import React from 'react'
import { Link } from 'react-router-dom'
import Dob from './home/Dob'
import Faq from './home/Faq'
import ForeignModal from './home/ForeignModal'
import GuidelineModal from './home/GuidelineModal'

const Modal = () => {
  return (
    <>
      <ForeignModal/>
      <GuidelineModal Link={Link}/>
      <Dob/>
      <Faq/>
      {/* <section className="modal expand-modal" tabindex="-1" id='faq'>
        <section className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <section className="modal-content">
            <article className="modal-header">
              <p className="h4 text-capitalize modal-title" id="exampleModalLabel"></p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </article>
            <article className="modal-body">
              
            </article>
            <article className="modal-footer">
              <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
            </article>
          </section>
        </section>
      </section> */}
    </>
  )
}

export default Modal
