import './BookList.css';

function ShowBookItems({ books }) {
    return (
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>{book.read ? 'Read' : 'Not Read'}</td>
                        </tr>
                    ))}
                </tbody>
           </table> 
    );
}

export default ShowBookItems;