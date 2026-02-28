import AddForm from './AddForm';
import './BookList.css';
import ShowBookItems from './ShowBookItems';
import { useReducer, useState, useEffect } from 'react';    
import { produce } from 'immer';


function bookReducer(state, action) {
  return produce(state, draft => {
    switch (action.type) {

      case "load":
        // Replace the entire state
        return action.payload;   // <-- returning here replaces the draft entirely

      case "add_book":
        draft.push(action.payload);
        break;

      case "delete_book":
        return draft.filter(book => book.id !== action.payload);
        // Returning a new array replaces the draft

      case "toggle_read_status": {
        const book = draft.find(b => b.id === action.payload);
        if (book) {
          book.read = !book.read;
        }
        break;
      }

      default:
        break;
    }
  });
}

function BookList() {
    const [books, dispatch] = useReducer(bookReducer, []);
    const [error, setError] = useState(null);

    // Get the book list from external source (json-server)
    useEffect(() => {
        console.log("In useEffect....")
        fetch('http://localhost:3001/books', {cache: "no-store"})
        .then((response) => {
            console.log("Processing response...")
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then((data) => {
            console.log("books data:", data);
            dispatch({ type: 'load', payload: data });
        })
        .catch((error) => setError(error));
    }, [])


    if (error !== null) {
        return <div>An error has occurred: {error.message}</div>;
    } else if ( !books || books.length === 0) {
        return <div>No books found</div>;
    } else {
        console.log("Rendering books:", books);
        return (
            <div>
                <h2>My Book List</h2>
                <AddForm dispatch={dispatch} />
                <ShowBookItems books={books} dispatch={dispatch} />
            </div>
        );
    }
}


export default BookList