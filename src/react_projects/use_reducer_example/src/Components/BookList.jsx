import './BookList.css';
import ShowBookItems from './ShowBookItems';
import { useState, useEffect } from 'react';    

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

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
            setBooks(data);
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
                <ShowBookItems books={books} />
            </div>
        );
    }
}


export default BookList