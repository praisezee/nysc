import React from 'react'
import { Alert, Table } from 'react-bootstrap';

const Clearance = () => {
  return (
    <div className='container-fluid'>
      <Alert variant='success' className='my-1 text-center h3 text-capitalize'>
        Monthly Clearance details
        <hr className="w-25 mx-auto opacity-1 mt-2 mb-0" />
      </Alert>
      <Table striped bordered hover className='my-3'>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Month</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>May</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>2</td>
          <td>June</td>
          <td>Present</td>
        </tr>
        <tr>
          <td>3</td>
            <td>July</td>
            <td>Present</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Clearance
