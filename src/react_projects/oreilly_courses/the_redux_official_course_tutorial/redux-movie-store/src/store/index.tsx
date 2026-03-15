import styles from '@/styles/Home.module.css'
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Movie {
  title : string;
  inBasket: boolean;
  liked: boolean;
}

interface MovieState {
  movies: Movie[];
  basket: string[];
  likedMovies: string[];
}


const initialState: MovieState = {
  movies: [
    {title: 'Inception', inBasket: false, liked: false},
    {title: 'The Matrix', inBasket: false, liked: false},
    {title: 'Interstellar', inBasket: false, liked: false}
  ],
  basket: [],
  likedMovies:[]
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    addToBasket: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.map(movie => {
        if (movie.title === action.payload) {
          return {...movie, inBasket: !movie.inBasket};
        }
        return movie;
      });
      if (state.basket.includes(action.payload)) {
        state.basket = state.basket.filter(movie => movie !== action.payload);
      } else {
        state.basket.push(action.payload);
      }

    },
    likeMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.map(movie => {
        if (movie.title === action.payload) {
          return {...movie, liked: !movie.liked};
        }
        return movie;
      });
      if (state.likedMovies.includes(action.payload)) {
        state.likedMovies = state.likedMovies.filter(movie => movie !== action.payload);
      } else {
        state.likedMovies.push(action.payload);
      }
    }
}});


const store = configureStore({ reducer: movieSlice.reducer });
export const { addMovie, addToBasket, likeMovie } = movieSlice.actions;
export default store;