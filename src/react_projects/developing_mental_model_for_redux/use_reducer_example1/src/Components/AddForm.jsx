import { useState } from 'react';
import PropTypes from "proptypes";
import './AddForm.css';
// This component is responsible for rendering a form to add a new book. 
// It takes an onAdd prop, which is a function that will be called when 
// the form is submitted with the new book data.
function AddForm({ dispatch }) {

    function createEmptyBook() {
        return {
            id: "",
            title: "",
            author: "",
            isbn: "",
            read: false
        };
    }

  const [newBookData, setNewBookData] = useState(createEmptyBook());

  function handleSubmit(e) {
    e.preventDefault();
    if (newBookData.title.trim() === "") return;

    const newBook = {
      id: crypto.randomUUID(),
      title: newBookData.title,
      author: newBookData.author,
      isbn: newBookData.isbn,
      read: false
    };

    dispatch({ type: 'add_book', payload: newBook });

    // clear the form
    setNewBookData(createEmptyBook());
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewBookData({ ...newBookData, [name]: value });
  }

  return (
    <div className="add-form-container">
      <h3>Add a New Book</h3>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={newBookData.title}
          onChange={handleInputChange}
        />
      
          <input
              type="text"
              name="author"
              placeholder="Author"
              value={newBookData.author}
              onChange={handleInputChange}
          />
        
          <input
              type="text"
              name="isbn"
              value={newBookData.isbn}
              placeholder="ISBN"
              onChange={handleInputChange}
          />
        <div>
          <button className="add-button" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

AddForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default AddForm;