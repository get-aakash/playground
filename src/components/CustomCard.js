import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CustomCard = ({movie, handleAddToList, isDelete}) => {
    
  return (
    <Card>
      <Card.Img variant='top' src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Text>Rating: {movie?.imdbRating}
        <br />
        Year: {movie?.Year}
        </Card.Text>
        {isDelete?(<Button variant='danger'>Delete</Button>):( <div className="d-flex justify-content-between">
            <Button variant='danger' onClick={() => handleAddToList({...movie, type: "awesome"}) }>Awesome</Button>
            <Button variant='warning' onClick={() => handleAddToList({...movie, type: "boring"})}>Boring</Button>
        </div>)}
       
      </Card.Body>
    </Card>
  )
}

export default CustomCard
