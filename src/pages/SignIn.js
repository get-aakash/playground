import React, { useEffect, useState } from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import { Button, Form, Placeholder } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../components/firebase-config/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../components/userSlice'

const SignIn = () => {

    const [formData, setFormData] = useState({})
    const {userInfo} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
console.log(userInfo.uid)
    
    useEffect(() => {
        userInfo?.uid && navigate("/dashboard")
      }, [userInfo.uid, navigate])
      
    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault()

        try {
            const userPending = signInWithEmailAndPassword(auth, formData.email, formData.password)
            toast.promise(userPending,{
                pending:"Please Wait!!"
            })
            const {user} = await userPending
            const {uid, displayName, email} = user
            const userObj = {
                uid,displayName,email
            }
            
            dispatch(setUser(userObj))
            navigate("/dashboard")
            return toast.success("SignIn successsful redirecting to dashboard!!")
        } catch (error) {
            toast.error(error.message)
            
        }
        
    }
    const inputs = [{
        label: "Email",
        type: "email",
        Placeholder: "Enter your email here",
        required: true,
        name: "email"
    },
    {
        label: "Password",
        type: "password",
        Placeholder: "******",
        required: true,
        name: "password"
    }]
  return (
    <DefaultLayout>
        <div className="mt-4 border rounded m-auto w-25 d-grid p-4 bg-white">
            <h3 className='text center'>SignIn here</h3>
            <hr />
            <Form onSubmit={handleOnSubmit}>
            {inputs.map((item,i)=><CustomInput key={i} {...item} onChange={handleOnChange} />)}
            <Button type='submit' className='mt-3'>SignIn</Button>

            </Form>
           

        </div>
      
    </DefaultLayout>
  )
}

export default SignIn
