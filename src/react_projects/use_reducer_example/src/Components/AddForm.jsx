import { useState } from 'react';

// This component is responsible for rendering a form to add a new book. 
// It takes an onAdd prop, which is a function that will be called when 
// the form is submitted with the new book data.
function AddForm({ onAdd }) {

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
      read: false
    };

    onAdd(newBook);

    // clear the form
    setNewBookData(createEmptyBook());
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book title"
        value={newBookData.title}
        onChange={e => setNewBookData({ ...newBookData, title: e.target.value })}
      />
     
        <input
            type="text"
            placeholder="Author"
            value={newBookData.author}
            onChange={e => setNewBookData({ ...newBookData, author: e.target.value })}
        />
       
        <input
            type="text"
            placeholder="ISBN"
            value={newBookData.isbn}
            onChange={e => setNewBookData({ ...newBookData, isbn: e.target.value })}
        />
      
      <button type="submit">Add</button>
    </form>
  );
}

export default AddForm;