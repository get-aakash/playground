import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "../App.css"
import DisplayTable from './DisplayTable'

let globalId = 0
const InputForm = ({handleOnDelete}) => {
    const [formData, setFormData] = useState({})
    const [toDo, setToDO] = useState([])

    const handleOnchange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleOnsubmit = (e)=>{
        e.preventDefault()
        setToDO([...toDo, {todos: formData, id: globalId++}])
       
       
    }
   
    
    return (
        <div className=" ">
            <Form onSubmit={handleOnsubmit} className='wrapper p-4 text-center d-flex align-items-center justify-content-center' >
                <Row  >
                    <Col md={6} >
                        <Form.Control required name='todo' value={formData.todo} placeholder="Enter Your ToDo here ..." onChange={handleOnchange} />
                    </Col>
                    <Col md={4} >
                        <Form.Control required type='date' name='date' value={formData.date} placeholder="Date" onChange={handleOnchange} />
                    </Col>
                    <Col md={2}>
                        <Button type='submit' variant='success'>Create</Button>
                    </Col>

                </Row>
            </Form>
            <span className="d-block p-1 bg-info "></span>
            <div className="display">
            <DisplayTable toDo={toDo} handleOnDelete={handleOnDelete}  />
            </div>
        </div>

    )
}

export default InputForm
