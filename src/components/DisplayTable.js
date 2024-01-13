import React from 'react'
import { Button, Table } from 'react-bootstrap'

const DisplayTable = ({toDo, handleOnDelete}) => {
  return (
    <div className="table p-2 ">
        <Table striped bordered hover className='mt-5'>
            
      <thead>
        <tr>
          <th>#</th>
          <th>ToDo</th>
          <th>Date</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {toDo.map((item,i)=>(
             <tr key={i}>
             <td>{i + 1}</td>
             <td>{item.todos.todo}</td>
             <td>{item.todos.date}</td>
             <td className='text-center'><Button onClick={()=>handleOnDelete(item.id)}  variant='danger' className='btn-sm' ><i className="fa-solid fa-trash"></i></Button></td>
           </tr>

        ))}
       
        
        
      </tbody>
    </Table>
    </div>
    
  )
}

export default DisplayTable
