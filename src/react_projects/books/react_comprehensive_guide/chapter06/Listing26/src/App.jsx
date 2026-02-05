import { useId } from 'react';
import './App.css';

function App() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input type="text" id={id} />
    </div>
  );
}
export default App;
