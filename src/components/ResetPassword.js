import React, { useState } from 'react'
import DefaultLayout from './layout/DefaultLayout'
import { Button, Form, Placeholder } from 'react-bootstrap'
import CustomInput from './CustomInput'
import { toast } from 'react-toastify'
import { sendPasswordResetEmail, updatePassword } from 'firebase/auth'
import { auth, db } from './firebase-config/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {
    const [formData, setFormData] = useState({})
const navigate = useNavigate()
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setFormData ({...formData, [name]: value})

    }
    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth,formData.email).then(data=>{
            alert("password reset link has been send to your email!!!")
            navigate("/signin")
        }).catch(error=>{
            alert(error.message)
        })
        
        
    }
    const inputs = [{
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        Placeholder: "sam@sam.com"
    },
  



    ]
    return (
        <DefaultLayout>
            <div className="mt-4 rounded border m-auto w-25 p-4">
                <h3>Reset Your Password here...</h3>
                <hr />
                <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => <CustomInput key={i} {...item} onChange={handleOnChange} /> )}
                <div className="mt-3 d-grid"><Button type='submit'>Send Password rest link</Button></div>

                </Form>
               

            </div>
        </DefaultLayout>
    )
}
export default ResetPassword
