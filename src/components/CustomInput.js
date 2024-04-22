import React from 'react'
import { Form } from 'react-bootstrap'

const CustomInput = ({label,...rest}) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
          <Form.Control
            {...rest}
          />
    </div>
  )
}

export default CustomInput
