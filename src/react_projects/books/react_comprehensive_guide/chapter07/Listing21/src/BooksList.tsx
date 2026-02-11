import React, { useEffect, useContext } from 'react';
import { Book } from './Book';
import BooksListItem from './BooksListItem';
import axios from 'axios';
import BooksContext from './BooksContext';

const BooksList: React.FC = () => {
  const [books, setBooks] = useContext(BooksContext);
  useEffect(() => {
    axios
      .get<Book[]>('http://localhost:3001/books')
      .then((response) => setBooks(response.data));
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <BooksListItem key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BooksList;
