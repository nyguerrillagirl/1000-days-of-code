import { useEffect, useState } from 'react';
import axios from 'axios';

function BooksLoader({ children }) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        console.log('Fetching books from API...');
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_SERVER}/books`
        );
        console.log('Books fetched:', data);
        setBooks(data);
      } catch (error) {
        setError(error);
      }
    })();
  }, []);

  //console.log('Rendering BooksLoader with books:', books, 'and error:', error);
  return children?.(books, error);
}

export default BooksLoader;
