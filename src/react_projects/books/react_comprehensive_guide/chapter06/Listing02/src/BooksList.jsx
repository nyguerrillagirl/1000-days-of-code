import { useReducer } from 'react';
import produce from 'immer';
import { StarBorder, Star } from '@mui/icons-material';

function reducer(state, action) {
  switch (action.type) {
    case 'RATE':
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          (book) => book.id === action.payload.id
        );
        draftState[index].rating = action.payload.rating;
      });
    default:
      return state;
  }
}

const initialBooks = [
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

function BooksList() {
  const [books, dispatch] = useReducer(reducer, initialBooks);
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
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>
              {new Array(5).fill('').map((item, i) => (
                <button
                  className="ratingButton"
                  key={i}
                  onClick={() =>
                    dispatch({
                      type: 'RATE',
                      payload: { id: book.id, rating: i + 1 },
                    })
                  }
                >
                  {book.rating < i + 1 ? <StarBorder /> : <Star />}
                </button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BooksList;
