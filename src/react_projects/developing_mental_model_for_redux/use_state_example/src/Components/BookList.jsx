import './BookList.css';
import ShowBookItems from './ShowBookItems';
import { useState, useEffect } from 'react';    

function BookList() {
    const [books, setBooks] = useState([]);
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
            setBooks(data);
        })
        .catch((error) => setError(error));
    }, [])

    // function to delete a book from the list
    const deleteBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    // function to toggle book reading status
    const toggleReadStatus = (id) => {
        setBooks(
            books.map((book) =>
                book.id === id ? { ...book, read: !book.read } : book
            )
        );
    };

    if (error !== null) {
        return <div>An error has occurred: {error.message}</div>;
    } else if ( !books || books.length === 0) {
        return <div>No books found</div>;
    } else {
        console.log("Rendering books:", books);
        return (
            <div>
                <h2>My Book List</h2>
                <ShowBookItems books={books} deleteBookFunction={deleteBook} toggleReadStatusFunction={toggleReadStatus} />
            </div>
        );
    }
}


export default BookList