import { useState } from 'react';
import Context from './Context';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <Context.Provider value={counter}>
      <button onClick={increment}>increment</button>
    </Context.Provider>
  );
}

export default App;
