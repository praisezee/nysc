import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col,Row } from 'react-bootstrap'

const Missing = () => {
  return (
    <main className='mt-4 pt-5'>
      <Container>
        <Row className='height-100 align-items-center'>
          <Col sm={10} md={8} lg={6} className='mx-auto'>
            <p className="h3 text-center text-danger text-capitalize">Error 404: Page not found</p>
            <p className="h3 text-center">The page requseted cannot be found. its either the url is broken or a bad request. Click <Link className='link' to='/'>here</Link> to visit our homepage</p>
          </Col>
        </Row>
      </Container>
      </main>
  )
}

export default Missing
