import { useState } from "react";
import { produce } from "immer";
import "./BooksList.css";
import BooksListItem from "./BooksListItem";

const initialBooks = [
  {
    id: 1,
    title: "JavaScript - The Comprehensive Guide",
    author: "Philip Ackermann",
    isbn: "978-3836286299",
    rating: 5,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert Martin",
    isbn: "978-0132350884",
    rating: 4,
  },
  {
    id: 3,
    title: "Design Patterns",
    author: "Erich Gamma",
    isbn: "978-0201633610",
    rating: 5,
  },
];

function BooksList() {
  const [books, setBooks] = useState(initialBooks);
  function handleRate(id, rating) {
    setBooks((prevState) => {
      return produce(prevState, (draftState) => {
        const index = draftState.findIndex((book) => book.id === id);
        draftState[index].rating = rating;
      });
    });
  }
  if (books.length === 0) {
    return <div>No books found</div>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BooksListItem key={book.id} book={book} onRate={handleRate} />
          ))}
        </tbody>
      </table>
    );
  }
}
export default BooksList;
