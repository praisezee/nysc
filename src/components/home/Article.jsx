import React from 'react'

const Article = ({src,title, id} ) => {
  return (
      <>
        <article className="p-3 col-6 col-lg-3 text-center shadow rounded border expand-out g-3" role='button' data-bs-toggle="modal" data-bs-target={id}>
          <p className="text-center h6 text-capitalize">{title}</p>
          <hr className='opacity-50 mx-auto w-50'/>
          <img src={src} alt="" className='img-fluid w-75 mx-auto my-4'/>
        </article> 
    </>
  )
}

export default Article
