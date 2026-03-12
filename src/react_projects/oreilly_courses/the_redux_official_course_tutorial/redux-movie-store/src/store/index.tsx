import styles from '@/styles/Home.module.css'
import { createStore } from 'redux'; 

type Movie = {
  title : string;
  inBasket: boolean;
  liked: boolean;
}

type State = {
  movies: Movie[];
  basket: string[];
  likedMovies: string[];
}

type Action =
  | { type: 'ADD_MOVIE'; payload: Movie }
  | { type: 'ADD_TO_BASKET'; payload: string }
  | { type: 'LIKE_MOVIE'; payload: string };

const initialState = {
  movies: [
    {title: 'Inception', inBasket: false, liked: false},
    {title: 'The Matrix', inBasket: false, liked: false},
    {title: 'Interstellar', inBasket: false, liked: false}
  ],
  basket: [],
  likedMovies:[]
};

function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        // flip the inBasket status of the movie in the movies array
        movies: state.movies.map(movie => movie.title == action.payload ?
          {...movie, inBasket: !movie.inBasket} : movie),
        // determine if the movie is already in basket, if so remove it, otherwise add it 
        basket: state.basket.includes(action.payload) ? 
          state.basket.filter(movie => movie !== action.payload) : 
          [...state.basket, action.payload]
      };
    case 'LIKE_MOVIE':
      return {
        ...state,
        // flip the liked status of the movie in the movies array
        movies: state.movies.map(movie => movie.title == action.payload ?
          {...movie, liked: !movie.liked} : movie),
        // determine if the movie is already in likedMovies, if so remove it, otherwise add it
        likedMovies: state.likedMovies.includes(action.payload) ? 
          state.likedMovies.filter(movie => movie !== action.payload) : 
          [...state.likedMovies, action.payload]
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;