import { useState } from 'react';
import BooksContext from './BooksContext';

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;
