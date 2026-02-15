import { ReactElement, useState, CSSProperties } from 'react';
import { Book } from './Book';
import './BooksList.scss';

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
  const [active, setActive] = useState<number | null>(null);

  return (
    <table className="BooksList">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => {
          const style: CSSProperties = {};
          if (book.id === active) {
            style.backgroundColor = 'yellow';
          }
          return (
            <tr key={book.id} onClick={() => setActive(book.id)} style={style}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>{book.rating && <span>{'⭑'.repeat(book.rating)}</span>}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BooksList;
