import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // State to hold the list of todo headings and their items
  const [todos, setTodos] = useState([]);

  // represents the current value of the heading input field
  const [headingInput, setHeadingInput] = useState('');

  // State to manage multiple list inputs
  const [listInputs, setListInputs] = useState({});

  // Function to add a new todo heading section (if input is not empty)
  const handleAddTodo = () => {
    const exists = todos.some(item => item.heading === headingInput);
    if (headingInput.trim() !== '' && !exists) {
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');
    }
  };
  
  const handleDeleteTodo = (index) => {
    // Create a shallow copy of the current todos array
    const newTodos = [...todos];
    // Remove the todo item at the specified index
    newTodos.splice(index, 1);
    // Update the state with the modified todos array
    setTodos(newTodos);
  };

  // Function to handle adding a new list item to a specific todo heading
  const handleAddList = (index) => {
    // Check if the input for the given index is not empty or just whitespace
    if (listInputs[index] && listInputs[index].trim() !== '') {
      const newTodos = [...todos]; // Create a shallow copy of the current todos array
      newTodos[index].lists.push(listInputs[index]); // Add the new list item to the specified todo heading
      setTodos(newTodos); // Update the state with the modified todos array
      setListInputs({ ...listInputs, [index]: '' }); // Clear the input field for that index
    }
  };

  // Function to update list input value for a specific heading index
  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value }); // Update the listInputs state for the corresponding index
  };

  return (
    <>
      {/* Input section to add a new TODO heading section */}
      <div className="todo-container">
        <h1 className="title">Figgy Todo List</h1>
        <div className="input-container">{/* Input field to enter a new heading */}
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      {/* Main section displaying all todos */}
      <div className="todo_main">
        {/* Todo List Headings will be rendered here */}
        {todos.map((todo, index) => (
         <div key={index} className="todo-card">
          <div className="heading_todo">
            {/* Display the heading text of the current todo item */} 
            <h3>{todo.heading}</h3> {/* Display the heading here */}
            {/* Button to delete the current heading by passing its index*/}
            <button 
              className="delete-button-heading" 
              onClick={() => handleDeleteTodo(index)}>Delete Heading
            </button>
          </div> 
          {/* Render all list items under this heading */}
          <ul>
              {/* Iterate over each list item inside the current todo */}
              {todo.lists.map((list, listIndex) => (
                <li key={listIndex} className='todo_inside_list'>
                  {/* Display the text content of the list item */}
                  <p>{list}</p>
                </li>
              ))}
            </ul>  
          {/* List items for the current heading will be rendered here */}
          <div className="add_list">
            {/* Input field for adding a new item under a specific heading */}
            <input
              type="text"
              className="list-input"
              placeholder="Add List"
              value={listInputs[index] || ''}
              onChange={(e) => handleListInputChange(index, e.target.value)} />
            {/* Button to add the new item to the current heading */}
            <button 
              className="add-list-button" 
              onClick={() => handleAddList(index)}>Add List</button>
          </div>
         </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
