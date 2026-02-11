import React from 'react';
import './App.css';
import BooksList from './BooksList';
import BooksProvider from './BooksProvider';

const App: React.FC = () => {
  return (
    <BooksProvider>
      <BooksList />
    </BooksProvider>
  );
};

export default App;
