import React from 'react';
import PropTypes from 'prop-types';

class BooksListItem extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <tr>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.isbn}</td>
      </tr>
    );
  }
}

BooksListItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default BooksListItem;
