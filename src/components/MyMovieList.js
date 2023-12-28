import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import CustomCard from './CustomCard'

const MyMovieList = ({data}) => {
    const [displayMovie, setDisplayMovie] = useState([])

    useEffect(()=>{
        setDisplayMovie(data)
    },[data])

    const selectCategory = (cat)=>{
        cat === "all" && setDisplayMovie(data)
        cat === "awesome" && setDisplayMovie(data.filter((movie)=>movie.type ==='awesome'))
        cat === "boring" && setDisplayMovie(data.filter((movie)=>movie.type ==='boring'))
    }
    
  return (
    <div className='bg-dark py-3  rounded mt-5'>
        <Row>
            <Col>
            <ButtonGroup>
                <Button variant='primary' onClick={()=> selectCategory('all')}>All</Button>
                <Button variant='danger' onClick={()=> selectCategory('awesome')}>Awesome</Button>
                <Button variant='warning' onClick={()=> selectCategory('boring')}>Boring</Button>
            </ButtonGroup>
            <p className='mt-3'>{displayMovie?.length} Movie(s) found</p>
            </Col>
        </Row>
        <Row>
            <Col className="d-flex flex-wrap justify-content-around gap-3">
                {displayMovie?.map((movie)=>{
                    
                  return( <CustomCard movie={movie} isDelete={true}/>)
                })}
            </Col>
        </Row>
      
    </div>
  )
}

export default MyMovieList
