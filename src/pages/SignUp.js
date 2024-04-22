import React, { useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import DefaultLayout from '../components/layout/DefaultLayout'
import CustomInput from '../components/CustomInput'
import { toast } from 'react-toastify'

const SignUp = () => {

    const [formData, setFormData] = useState({})

    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const {password, cPassword} = formData

        if(password===cPassword){
            toast.success("User Created")
            console.log("success")
        }
    }
    const inputs = [
        {

            label: "First Name",
            name: "fName",
            type: 'text',
            placeholder: "First Name",
            required: true
        },
        {
            label: "Last Name",
            name: "lName",
            type: 'text',
            placeholder: "Last Name",
            required: true
        },
        {
            label: "Email",
            name: "email",
            type: 'email',
            placeholder: "email",
            required: true
        },
        {
            label: "Password",
            name: "password",
            type: 'password',
            placeholder: "******",
            required: true
        },
        {
            label: "Confirm Password",
            name: "cPassword",
            type: 'password',
            placeholder: "******",
            required: true
        },

    ]
    return (
        <DefaultLayout>
            <Container className='mt-3 p-3 w-25 m-auto border bg-white rounded '>
                <h3>SignUp here !!!</h3>
                <hr />
                <div className="d-grid">
                    <Form onSubmit={handleOnSubmit}>
                    {inputs.map((item, i) => <CustomInput {...item} onChange={handleOnChange}/>)}
                    <Button type='submit' className='mt-3'>SignUp</Button>

                    </Form>
                    
                </div>




            </Container>


        </DefaultLayout>

    )
}

export default SignUp
