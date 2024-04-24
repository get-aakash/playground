import React, { useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap'
import DefaultLayout from '../components/layout/DefaultLayout'
import CustomInput from '../components/CustomInput'
import { toast } from 'react-toastify'
import { createUserAction } from '../components/userAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUser } from '../components/userSlice'

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOnChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        const {password, cPassword} = formData

        if(password===cPassword){
            const user =await  createUserAction(formData)
        
            if(user?.uid){
                
                navigate("/dashboard")
                dispatch(setUser(user))
            }
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
            <div className='mt-4 border rounded m-auto w-25 d-grid p-4 bg-white'>
                <h3>SignUp here !!!</h3>
                <hr />
                <div >
                    <Form className="d-grid" onSubmit={handleOnSubmit}>
                    {inputs.map((item, i) => <CustomInput  key={i} {...item} onChange={handleOnChange}/>)}
                    <Button type='submit' className='mt-3'>SignUp</Button>

                    </Form>
                    
                </div>




            </div>


        </DefaultLayout>

    )
}

export default SignUp
