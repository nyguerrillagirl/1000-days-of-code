import { useDebugValue } from 'react';
import { useState, useEffect } from 'react';
import './App.css';

function useName() {
  const [name, setName] = useState('');
  useDebugValue(`Name is ${name}`);
  useEffect(() => {
    setTimeout(() => {
      setName('React');
    }, 5000);
  });

  return name;
}

function App() {
  const name = useName();

  return <div>{name}</div>;
}
export default App;
