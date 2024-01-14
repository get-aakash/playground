import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "../App.css"
import DisplayTable from './DisplayTable'
import { useDispatch } from 'react-redux'
import { create } from '../redux/toDoSlice'

let globalId = 1
const initialState = {
    todo: "",
    date: "",


}
const InputForm = () => {
    const [formData, setFormData] = useState(initialState)
    const [toDo, setToDO] = useState([])

    const dispatch = useDispatch()
   

    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })


    }
    const handleOnsubmit = (e) => {
        e.preventDefault()
        setToDO([...toDo, { todos: formData, id: globalId++ }])
        
        console.log(toDo)
        setFormData(initialState)
        

    }
   
        dispatch(create(toDo))
    
    
   

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
                <DisplayTable   />
            </div>
        </div>

    )
}

export default InputForm
