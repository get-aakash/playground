import React, { useState } from 'react'
import CustomInput from './CustomInput'
import { Button, Form } from 'react-bootstrap'

const PasswordResetForm = () => {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState("")
  return (
    <div className='bordder p-4 py-4 bg-light rounded shadow-lg'>
        <h3 className="text-center">Reset Your Password!!!</h3>
        <hr />

        <Form>
            <CustomInput label="Email *" name="email" placeholder="sam@sam.com" required={true}/>
            <CustomInput label="New Password *" type='password' name="password" placeholder="****" required={true} />
            <CustomInput label="Confirm Password *" type='password' name="cpassword" placeholder="****" required={true} />
            <Form.Text>
                Password should contain atleast 6 characters, one upper case lower case and number !!!
           {error && <ul>
            <li className='text-danger fw-bolder fs-4'>{error }</li>
           </ul>}
           
            </Form.Text>
            <div className="d-grid mt-3">
            <Button type='submit' variant="outline-danger">
                Reset Password
            </Button>
            </div>
            
        </Form>
      
    </div>
  )
}

export default PasswordResetForm
