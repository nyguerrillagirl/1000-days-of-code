import styles from '@/styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';

export default function Home() {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const basket = useSelector((state) => state.basket);
  const likedMovies = useSelector((state) => state.likedMovies);

  function handleAddMovie() {
    dispatch({ type: 'ADD_MOVIE', payload: movieTitle });
    setMovieTitle('');
  }

  function handleAddToBasket(movie) {
    dispatch({ type: 'ADD_TO_BASKET', payload: movie });
  }

  function handleAddToLikedMovies(movie) {
    dispatch({ type: 'LIKE_MOVIE', payload: movie });
  }

  return (
    <>
    { console.log('movieTitle: ', movieTitle) }
      <div>
        <h1>My Movie List</h1>
      </div>
      <div>
      <input 
        type='text' 
        placeholder='Enter a movie title'
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)} 
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      <div>
        <h2>Movies:</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}
              <button onClick={() => handleAddToBasket(movie)}>Add to Basket</button>
              <button onClick={() => handleAddToLikedMovies(movie)}>Like</button>
            </li>
          ))}
        </ul>
        <h2>My Basket ({basket.length})</h2>
        <ul>
          {basket.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2>Liked Movies ({likedMovies.length})</h2>
        <ul>
          {likedMovies.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>                
      </div>

    </>
  )
}
