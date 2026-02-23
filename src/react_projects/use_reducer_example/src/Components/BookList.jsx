import './BookList.css';
import { useState, useEffect } from 'react';    

function BookList() {
    const [books, setBooks] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/books')
        .then((response) => {
        if (!response.ok) {
        throw new Error('Request failed');
        }
        response.json();
        })
        .then((data) => {
        setBooks(data);
        })
        .catch((error) => setError(error));
    }, [])

    if (error !== null) {
        return <div>An error has occurred: {error.message}</div>;
    } else if ( !books || books.length === 0) {
        return <div>No books found</div>;
    } else {
        return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                </tr>
                ))}
            </tbody>
        </table>
        );
    }
}


export default BookList