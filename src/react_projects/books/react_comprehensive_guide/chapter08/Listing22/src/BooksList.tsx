import React from 'react';
import { Book } from './Book';

const books: Book[] = [
  {
    id: 1,
    title: 'JavaScript - The Comprehensive Guide',
    author: 'Philip Ackermann',
    isbn: '978-3836286299',
    rating: 5,
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert Martin',
    isbn: '978-0132350884',
    rating: 4,
  },
  {
    id: 3,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    isbn: '978-0201633610',
    rating: 5,
  },
];

const BooksList: React.FC = () => {
  return (
    <table className="border-collapse">
      <thead className="border-b-4 border-black">
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          return (
            <tr key={book.id} className="even:bg-gray-300">
              <td className="py-1 px-2">{book.title}</td>
              <td className="py-1 px-2">{book.author}</td>
              <td className="py-1 px-2">{book.isbn}</td>
              <td className="py-1 px-2">
                {book.rating && <span>{'⭑'.repeat(book.rating)}</span>}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BooksList;
