import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const BookList = () => {
  const { books } = useSelector((state) => state.book)
  console.log(books)
  return (
    <Container>
      <div className="m-auto d-flex justify-content-center gap-4">
      {books.map((item)=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.bName}</Card.Title>
          <Card.Text >
            {item.summary.substring(0, 10)}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      ))}
      
        

      </div>


    </Container>
  )
}

export default BookList
