import './App.css';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Counter Redux Example</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
