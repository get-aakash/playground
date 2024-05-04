import React, { useEffect } from 'react'
import DefaultLayout from '../components/layout/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import BookList from '../components/books/BookList'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getBookAction } from '../components/books/bookAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getBookAction())
  },[dispatch])
  return (
    <DefaultLayout>
      <div className="mt-4 m-auto w-25 ">
     <Link to="/newbook"><Button variant='primary'>+Add Book</Button></Link>
      </div>
      <div className="mt-3">
      <BookList />
      </div>
       
    </DefaultLayout>
  )
}

export default Dashboard
