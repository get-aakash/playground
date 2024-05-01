import React, { useState } from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import CustomInput from '../components/CustomInput'
import { Button, Container, Form } from 'react-bootstrap'
import { addBookAction } from '../components/books/bookAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const NewBook = () => {

    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputs = [
        {
            label: "Book Name",
            name: "bName",
            type: "text",
            placeholder: "Name Of the Book",
            required: true

        },
        {
            label: "Author",
            name: "author",
            type: "text",
            placeholder: "Name Of the Author",
            required: true

        },
        {
            label: "Image",
            name: "image",
            type: "url",
            placeholder: "image of the book",
            required: true

        },
       ,

]

const handleOnChange = (e)=>{
    const {name,value} = e.target
    setFormData({...formData, [name]: value})

}
const handleOnSubmit = (e)=>{
    e.preventDefault()
    
    dispatch(addBookAction(formData))
    navigate("/dashboard")
}
return (
    <DefaultLayout>
        <Container className="mt-3 p-4 w-50 m-auto border"> 
        <Form onSubmit={handleOnSubmit}>
        {inputs.map((item,i)=> <CustomInput key={i}{...item} onChange={handleOnChange}/>)}

        <div className="mt-3 d-grid">
            <Button type="submit">Submit New Book</Button>
        </div>
        </Form>
        </Container>
       

    </DefaultLayout>
)
}

export default NewBook
