import React from 'react';
import BooksList from './BooksList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Books management</h1>
        <BooksList />
      </div>
    );
  }
}

export default App;
