import AddForm from './AddForm';
import './BookList.css';
import ShowBookItems from './ShowBookItems';
import { useReducer, useState, useEffect } from 'react';    

function bookReducer(state, action) {
    switch (action.type) {
        case "load":
            return action.payload;  // relace state with fetched list
        case 'add_book':
            return [ ...state, action.payload ];
        case 'delete_book':
            return state.filter(book => book.id !== action.payload);
        case 'toggle_read_status':
            return state.map(book => 
                book.id === action.payload ? { ...book, read: !book.read } : book
            );
        default:
            return state;
    }
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