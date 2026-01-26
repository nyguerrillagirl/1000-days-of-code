import './App.css';
import BooksList from './BooksList';
import BooksLoader from './BooksLoader';

function App() {
  return (
    <div>
      <h1>Books management</h1>
      <BooksLoader>
        {(books, error) => <BooksList books={books} error={error} />}
      </BooksLoader>
    </div>
  );
}

export default App;
