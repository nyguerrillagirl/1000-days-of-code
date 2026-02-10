import React from 'react';
import { Book } from './Book';

type Props = {
  book: Book;
};

const BooksListItem: React.FC<Props> = ({ book }) => {
  return <li>{book.title}</li>;
};

export default BooksListItem;
