import {  Container } from 'react-bootstrap';
import './App.css';
import SearchForm from './components/SearchForm';
import { useState } from 'react';
import MyMovieList from './components/MyMovieList';


function App() {
 const [movieList, setMovieList] = useState([])
 console.log(movieList)
 const addMovie = (movie)=>{
  setMovieList([...movieList, movie])
    

 }
  return (
    <div className="wrapper bg-dark pt-5">
      
      <Container>
        <h3 className='text-center'>My Movie Collection</h3>
        <hr />
        <SearchForm addMovie={addMovie} />
        <MyMovieList data={movieList} />
      </Container>
      
    </div>
  );
}

export default App;
