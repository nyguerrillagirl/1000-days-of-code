import React from 'react';

class BooksList extends React.Component {
  state = { books: [] };

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);
    const data = await response.json();
    this.setState({ books: data });
  }

  render() {
    return (
      <ul>
        {this.state.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    );
  }
}

export default BooksList;
