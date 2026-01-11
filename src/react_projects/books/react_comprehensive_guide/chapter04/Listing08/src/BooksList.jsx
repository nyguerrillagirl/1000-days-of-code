import { useState } from 'react';
import './BooksList.css';
import { useEffect } from 'react';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks([
        {
          id: 1,
          title: 'JavaScript - The Comprehensive Guide',
          author: 'Philip Ackermann',
          isbn: '978-3836286299',
          rating: 5,
        },
      ]);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log('Elements in the state: ', books.length);
    console.log('Table rows: ', document.querySelectorAll('tbody tr').length);
  });

  if (books.length === 0) {
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
