import React from 'react';
import './App.css';
import { BooksContext } from './BooksContext';
import BooksList from './BooksList';

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: 'JavaScript - The Comprehensive Guide',
        author: 'Philip Ackermann',
        isbn: '978-3836286299',
        rating: 5,
      },
    ],
  };

  render() {
    return (
      <BooksContext.Provider value={this.state.books}>
        <BooksList />
      </BooksContext.Provider>
    );
  }
}

export default App;
