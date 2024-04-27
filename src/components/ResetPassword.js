import React, { useState } from 'react'
import DefaultLayout from './layout/DefaultLayout'
import { Button, Form, Placeholder } from 'react-bootstrap'
import CustomInput from './CustomInput'
import { toast } from 'react-toastify'

const ResetPassword = () => {
    const [formData, setFormData] = useState({})

    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})

    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        const {nPassword, cnPassword} = formData
        if(nPassword !== cnPassword){
            toast.error("Passwor Doesnot match")
        }
    }
    const inputs = [{
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        Placeholder: "sam@sam.com"
    },
    {
        name: "nPassword",
        label: "New Password",
        type: "password",
        required: true,
        Placeholder: "******"
    },
    {
        name: "cnPassword",
        label: "Confirm Password",
        type: "password",
        required: true,
        Placeholder: "******"
    },



    ]
    return (
        <DefaultLayout>
            <div className="mt-4 rounded border m-auto w-25 p-4">
                <h3>Reset Your Password here...</h3>
                <hr />
                <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => <CustomInput key={i} {...item} onChange={handleOnChange} /> )}
                <div className="mt-3 d-grid"><Button type='submit'>Reset Password</Button></div>

                </Form>
               

            </div>
        </DefaultLayout>
    )
}
export default ResetPassword
