import { useContext } from 'react';
import BooksContext from './BooksContext';
import produce from 'immer';
import { StarBorder, Star } from '@mui/icons-material';

function BooksListItem({ book }) {
  const [, setBooks] = useContext(BooksContext);

  function handleRate(id, rating) {
    setBooks((prevState) => {
      return produce(prevState, (draftState) => {
        draftState.map((book) => {
          if (book.id === id) {
            book.rating = rating;
          }
          return book;
        });
      });
    });
  }

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : 'Unknown'}</td>
      <td>{book.isbn}</td>
      <td>
        {new Array(5).fill('').map((item, i) => (
          <button
            className="ratingButton"
            key={i}
            onClick={() => handleRate(book.id, i + 1)}
          >
            {book.rating < i + 1 ? <StarBorder /> : <Star />}
          </button>
        ))}
      </td>
    </tr>
  );
}

export default BooksListItem;
