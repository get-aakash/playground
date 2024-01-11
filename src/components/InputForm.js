import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import "../App.css"

const InputForm = () => {
    return (
        <div className=" ">
            <Form className='wrapper p-4 text-center d-flex align-items-center justify-content-center' >
                <Row  >
                    <Col md={10} >
                        <Form.Control placeholder="Enter Your ToDo here ..." />
                    </Col>
                    <Col md={2}>
                        <Button variant='success'>Create</Button>
                    </Col>

                </Row>
            </Form>
            <span class="d-block p-1 bg-info "></span>
        </div>

    )
}

export default InputForm
