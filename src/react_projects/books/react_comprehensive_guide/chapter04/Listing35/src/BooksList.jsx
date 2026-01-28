import { useEffect, useContext } from 'react';
import BooksContext from './BooksContext';
import BooksListItem from './BooksListItem';
import './BooksList.css';
import axios from 'axios';

function BooksList() {
  const [books, setBooks] = useContext(BooksContext);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_SERVER}/books`
      );
      setBooks(data);
    })();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BooksListItem key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  );
}

export default BooksList;
