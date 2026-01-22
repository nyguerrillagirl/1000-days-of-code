import { useState } from 'react';
import './BooksList.css';
import { useEffect } from 'react';

function BooksList() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/books', { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  if (error !== null) {
    return <div>An error has occurred: {error.message}</div>;
  } else if (books.length === 0) {
    return <div>No books found</div>;
  } else {
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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BooksList;
