import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { fetchData } from '../helpers/axiosHelper'
import CustomCard from './CustomCard'

const SearchForm = ({addMovie}) => {
    const [movieName, setMovieName] = useState("")
    const [movie, setMovie] = useState({})
    const [error, setError] = useState(false)

    const handleOnChange = (e) => {
        setMovieName(e.target.value)
        
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        setMovie({})
        setError(false)
        setMovieName("")
       const result=  await fetchData(movieName)
       if(result.Response === "True"){
        setMovie(result)
       }else{
        setError(true )
       }
        
    }
    const handleAddToList = (movie)=>{
        addMovie(movie)
        setMovie({})
        setMovieName("")

    }
    return (
        <div className="search-form">
            <Form onSubmit={handleOnSubmit}>
                <Row className='g-2'>
                    <Col xs={9}>
                        <Form.Control placeholder="Movie Name" required value={movieName} onChange={handleOnChange} />
                    </Col>
                    <Col>
                        <Button variant='success' type='submit'>Search</Button>
                    </Col>
                </Row>
            </Form>
            <div className="mt-3 d-flex justify-content-center">
                {movie?.imdbID && <CustomCard movie={movie} handleAddToList={handleAddToList} />}
            </div>
            {error && (
                <Alert variant="danger">No movie found. Try searching something else</Alert>
            ) }
        </div>

    )
}

export default SearchForm
