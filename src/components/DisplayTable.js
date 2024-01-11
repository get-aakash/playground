import React from 'react'
import { Table } from 'react-bootstrap'

const DisplayTable = () => {
  return (
    <div className="table p-2 ">
        <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>ToDo</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Delete</td>
        </tr>
        
      </tbody>
    </Table>
    </div>
    
  )
}

export default DisplayTable
