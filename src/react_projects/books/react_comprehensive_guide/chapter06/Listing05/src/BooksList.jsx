import { useReducer, useMemo, useEffect } from 'react';
import produce from 'immer';
import { StarBorder, Star } from '@mui/icons-material';

function middleware(dispatch) {
  return async function (action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case 'FETCH':
        const fetchResponse = await fetch(
          `${process.env.REACT_APP_API_SERVER}/books`
        );
        const books = await fetchResponse.json();
        dispatch({ type: 'LOAD_SUCCESS', payload: books });
        break;
      case 'RATE':
        await fetch(
          `${process.env.REACT_APP_API_SERVER}/books/${action.payload.id}`,
          {
            method: 'PUT',
            headers: { 'Content-Type': 'Application/JSON' },
            body: JSON.stringify(action.payload),
          }
        );
        dispatch({
          type: 'RATE_SUCCESS',
          payload: { id: action.payload.id, rating: action.payload.rating },
        });
        break;
    }
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_SUCCESS':
      return action.payload;
    case 'RATE_SUCCESS':
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

function BooksList() {
  const [books, dispatch] = useReducer(reducer, []);

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);

  useEffect(() => {
    middlewareDispatch({ type: 'FETCH' });
  }, [middlewareDispatch]);

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
                    middlewareDispatch({
                      type: 'RATE',
                      payload: { ...book, rating: i + 1 },
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
