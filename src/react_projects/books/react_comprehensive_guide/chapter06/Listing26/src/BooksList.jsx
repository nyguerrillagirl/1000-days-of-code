import { useEffect } from 'react';
import { useState } from 'react';

function BooksList({ searchString }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/books?title_like=${searchString}`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [searchString]);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}

export default BooksList;
