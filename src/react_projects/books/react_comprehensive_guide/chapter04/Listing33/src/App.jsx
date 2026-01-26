import { useState } from 'react';
import Context from './Context';
import Counter from './Counter';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <Context.Provider value={counter}>
      <Counter />
      <button onClick={increment}>increment</button>
    </Context.Provider>
  );
}

export default App;
