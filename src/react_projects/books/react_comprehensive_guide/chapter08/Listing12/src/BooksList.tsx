import { ReactElement } from 'react';
import { Book } from './Book';
import styles from './BooksList.module.css';

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
    <table className={styles.BooksList}>
      <thead className={styles.header}>
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
            <tr key={book.id} className={styles.tableRow}>
              <td className={styles.cell}>{book.title}</td>
              <td className={styles.cell}>{book.author}</td>
              <td className={styles.cell}>{book.isbn}</td>
              <td className={styles.cell}>
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
