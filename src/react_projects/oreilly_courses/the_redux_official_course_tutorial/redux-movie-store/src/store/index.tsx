import styles from '@/styles/Home.module.css'
import { createStore } from 'redux'; 

const initialState = {
  movies: [
    {title: 'Inception', inBasket: false, liked: false},
    {title: 'The Matrix', inBasket: false, liked: false},
    {title: 'Interstellar', inBasket: false, liked: false}
  ],
  basket: [],
  likedMovies:[]
};

function reducer(state=initialState, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: state.basket.includes(action.payload) ? 
          state.basket.filter(movie => movie !== action.payload) : 
          [...state.basket, action.payload]
      };
    case 'LIKE_MOVIE':
      return {
        ...state,
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