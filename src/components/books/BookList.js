import React from 'react'
import { useSelector } from 'react-redux'

const BookList = () => {
    const {books} = useSelector((state)=>state.book)
    console.log(books)
  return (
    <div>
        Book List
      
    </div>
  )
}

export default BookList
