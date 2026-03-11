import styles from '@/styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';

export default function Home() {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: {movies: {title:string; liked: boolean; inBasket: boolean;}[];}) => state.movies);
  const basket = useSelector((state: {basket: {title:string; liked: boolean; inBasket: boolean;}[];}) => state.basket);
  const likedMovies = useSelector((state: {likedMovies: string[];}) => state.likedMovies);

  function handleAddMovie() {
    if (!movieTitle.trim()) return; // Prevent adding empty titles
    const newMovie = { title: movieTitle, liked: false, inBasket: false };
    dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    setMovieTitle('');
  }

  function handleAddToBasket(movie) {
    dispatch({ type: 'ADD_TO_BASKET', payload: movie.title });
  }

  function handleAddToLikedMovies(movie) {
    dispatch({ type: 'LIKE_MOVIE', payload: movie.title });
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
            <li key={index}>{movie.title}
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
