import React from 'react';
import BooksListItem from './BooksListItem';

const initialBooks = [
  {
    id: 1,
    title: 'JavaScript - The Comprehensive Guide',
    author: 'Philip Ackermann',
    isbn: '978-3836286299',
    rating: 5,
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert Martin',
    isbn: '978-0132350884',
    rating: 4,
  },
  {
    id: 3,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    isbn: '978-0201633610',
    rating: 5,
  },
];

class BooksList extends React.Component {
  state = {
    books: initialBooks,
  };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {this.state.books.map((book) => (
            <BooksListItem book={book} key={book.id} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default BooksList;
