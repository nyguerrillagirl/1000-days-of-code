import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const inputRef = useRef();

  function handleChange() {
    setName(inputRef.current.value);
  }

  return (
    <div>
      <div>{name}</div>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
}

export default App;
