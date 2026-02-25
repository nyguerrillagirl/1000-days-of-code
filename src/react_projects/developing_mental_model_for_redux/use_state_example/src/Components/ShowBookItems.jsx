import './BookList.css';

function ShowBookItems({ books, deleteBookFunction, toggleReadStatusFunction }) {
    return (
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Status</th>
                        <th>Toggle Read Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.read ? 'Read' : 'Not Read'}</td>
                            <td><button className="button-blue" onClick={() => toggleReadStatusFunction(book.id)}>
                                Toggle Read Status
                            </button></td>
                            <td><button className="button-blue" onClick={() => deleteBookFunction(book.id)}>
                                Delete
                            </button></td>
                        </tr>
                    ))}
                </tbody>
           </table> 
    );
}

export default ShowBookItems;