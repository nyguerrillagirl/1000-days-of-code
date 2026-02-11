import React, { ReactNode, useState } from 'react';
import { Book } from './Book';
import BooksContext from './BooksContext';

type Props = {
  children: ReactNode;
};

const BooksProvider: React.FC<Props> = ({ children }) => {
  const bookState = useState<Book[]>([]);
  return (
    <BooksContext.Provider value={bookState}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
