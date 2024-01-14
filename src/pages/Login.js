import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Button, Col, Form, Row } from 'react-bootstrap'
import CustomInput from '../components/CustomInput'

const Login = () => {
  const inputs = [{
    label: "Email",
        name: 'email',
        type: 'email',
        required: true,
        placeholder: "sam@sam.com"
    },
    {
        label: "Password",
        name: 'password',
        type: 'password',
        required: true,
        placeholder: "******"

  }]
  return (
    <DefaultLayout>
      <div className="container w-50 m-auto">
        <Form className=' p-3 py-5 rounded shadow-lg '>
          <h3>Welcome back!!</h3>
    <hr />

    {inputs.map((item, index) => (
                        <CustomInput key={index} {...item}  />
                    ))}
          <div className="d-grid mt-5">
            <Button type='submit' variant='success'>SigIn</Button>
          </div>





        </Form>

      </div>
    </DefaultLayout>
  )
}

export default Login
