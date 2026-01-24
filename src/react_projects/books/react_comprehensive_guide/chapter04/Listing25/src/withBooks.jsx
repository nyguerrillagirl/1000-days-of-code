import { useEffect, useState } from 'react';
import axios from 'axios';

function withBooks(Component) {
  return function (props) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_API_SERVER}/books`
          );
          setBooks(data);
        } catch (error) {
          setError(error);
        }
      })();
    }, []);

    return <Component {...props} books={books} error={error} />;
  };
}

export default withBooks;
