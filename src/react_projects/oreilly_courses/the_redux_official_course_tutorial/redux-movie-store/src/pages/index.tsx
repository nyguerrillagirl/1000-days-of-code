import styles from '@/styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState} from 'react';
import { Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import { Favorite, FavoriteBorder, AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material';

export default function Home() {
  const [movieTitle, setMovieTitle] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: {movies: {title:string; liked: boolean; inBasket: boolean;}[];}) => state.movies);
  //const basket = useSelector((state: {basket: {title:string; liked: boolean; inBasket: boolean;}[];}) => state.basket);
  const basket = useSelector((state: {basket: string[];}) => state.basket);
  const likedMovies = useSelector((state: {likedMovies: string[];}) => state.likedMovies);

  function handleAddMovie() {
    if (!movieTitle.trim()) return; // Prevent adding empty titles
    const newMovie = { title: movieTitle, liked: false, inBasket: false };
    dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    setMovieTitle('');
  }

  function handleAddToBasket(movie:string) {
    dispatch({ type: 'ADD_TO_BASKET', payload: movie });
  }

  function handleAddToLikedMovies(movie:string) {
    dispatch({ type: 'LIKE_MOVIE', payload: movie });
  }

  return (
    <div className="container">
   
      <div>
        <h1>My Movie List</h1>
      </div>
      <div className="add-movie">
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
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <Card key={index} classname="movie-card">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {movie.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={movie.inBasket ? <RemoveShoppingCart /> : <AddShoppingCart />}
                  onClick={() => handleAddToBasket(movie.title)}>
                  {movie.inBasket ? "Remove from Basket" : "Add to Basket"}
                </Button>
                 <Button
                  startIcon={movie.liked ? <Favorite /> : <FavoriteBorder />}
                  onClick={() => handleAddToLikedMovies(movie.title)}>
                  {movie.liked ? "Unlike" : "Like"}
                </Button>               
              </CardActions>
            </Card>
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

    </div>
  )
}
