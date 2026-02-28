import './BookList.css';
import PropTypes from "proptypes"; 
import { BookPropType } from '../propTypes/book';


function ShowBookItems({ books, dispatch }) {
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
                            <td><button className="button-blue" onClick={() => dispatch({ type: 'toggle_read_status', payload: book.id })}>
                                Toggle Read Status
                            </button></td>
                            <td><button className="button-blue" onClick={() => dispatch({ type: 'delete_book', payload: book.id })}>
                                Delete
                            </button></td>
                        </tr>
                    ))}
                </tbody>
           </table> 
    );
}

ShowBookItems.propTypes = {
    books: PropTypes.arrayOf(BookPropType).isRequired,
    dispatch: PropTypes.func.isRequired
};

export default ShowBookItems;