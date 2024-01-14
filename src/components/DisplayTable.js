import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../redux/toDoSlice'

const DisplayTable = () => {

  const {todoInfo} = useSelector((state)=> state.toDo)
  const dispatch = useDispatch()
  
  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure to delete this TODO?")) {
        const value = todoInfo.filter((data) => data.id !== id)
        dispatch(create(value))
        
    }
}
  
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
        {todoInfo.map((item,i)=>(
             <tr key={i}>
             <td>{i + 1}</td>
             <td>{item.todos.todo}</td>
             <td>{item.todos.date}</td>
             <td className='text-center'><Button onClick={()=>handleOnDelete(item.id)}   variant='danger' className='btn-sm' ><i className="fa-solid fa-trash"></i></Button></td>
           </tr>

        ))}
       
        
        
      </tbody>
    </Table>
    </div>
    
  )
}

export default DisplayTable
