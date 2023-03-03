import React from 'react'
import { Card, Container,Alert, Button } from 'react-bootstrap'


const PersonalInformation = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title className='py-2'>
            Personal Information
          </Card.Title>
          <hr className='w-100 fw-bold' />
          <Card.Text>
            <Alert variant='success'>
              <Container>
              <p className='fw-bold'>Name:</p>
              <p className='fw-bold'>Batch:</p>
              <p className='fw-bold'>GSM No| Gender:</p>
              <p className='fw-bold'>Email:</p>
              <p className='fw-bold'>Callup No:</p>
              <p className='fw-bold'>State Code:</p>
              <p className='fw-bold'>NHIS No:</p>
              <p className='fw-bold'>HMO:</p>
              </Container>
              <p>Pls note: <span className="fw-bold">
                <em>You cannot apply for DOB (Date of Birth) Correction after you have been documented in CAMP.</em>
                <br/>
                <em>Also note that your Graduation Date, Date of Birth and Course of Study are going to appear on your Certificate of National Service.</em>
                <br/>
                <em>Ensure that the above are correct before documentation in CAMP</em>
              </span>
              </p>
              <p className="text-danger fw-bolder">Ensure you print your greencard slip, sign it and bring it to camp. It's compulsory for registration in camp</p>
              <div className='w-100 text-center'>
                <Button variant='success' className='w-75 mx-auto my-1'>
                  Print Slip
                </Button>
                <Button variant='success' className='w-75 mx-auto my-1'>
                  Relocation
                </Button>
              </div>
            </Alert>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default PersonalInformation
