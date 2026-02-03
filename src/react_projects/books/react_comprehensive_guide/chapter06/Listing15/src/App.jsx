import { useState, useRef } from 'react';
import Input from './Input';
import './App.css';

function App() {
  const ref = useRef(null);

  const [name, setName] = useState('');

  function handleClick() {
    setName(ref.current.value);
  }

  return (
    <div>
      <div>Hello {name}!</div>
      <Input label="Name: " title="Name: " ref={ref} />
      <button onClick={handleClick}>say hello</button>
    </div>
  );
}
export default App;
