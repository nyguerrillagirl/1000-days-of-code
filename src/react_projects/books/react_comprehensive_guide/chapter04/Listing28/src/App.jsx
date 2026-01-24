import './App.css';
import BooksList from './BooksList';
import withBooks from './withBooks';

const BooksListWithBooks = withBooks(BooksList);

function App() {
  return (
    <div>
      <h1>Books management</h1>
      <BooksListWithBooks />
    </div>
  );
}

export default App;
