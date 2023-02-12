import React from 'react'

const ForeignModal = () => {
  return (
    <section className="modal expand-modal" tabindex="-1" id='foreign'>
      <section className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <section className="modal-content">
          <article className="modal-header">
            <p className="h4 text-capitalize modal-title" id="foreign">foreign</p>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </article>
          <article className="modal-body">
            
          </article>
          <article className="modal-footer">
            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
          </article>
        </section>
      </section>
    </section>
  )
}

export default ForeignModal
