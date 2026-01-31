import React from 'react';
import { BooksContext } from './BooksContext';

class BooksList extends React.Component {
  static contextType = BooksContext;

  render() {
    return (
      <ul>
        {this.context.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    );
  }
}

export default BooksList;
