import { useState, useDeferredValue, useMemo } from 'react';
import BooksList from './BooksList';
import './App.css';

function App() {
  console.log('render');
  const [searchString, setSearchString] = useState('');
  const deferredSearchString = useDeferredValue(searchString, {
    timeoutMs: 1000,
  });

  const list = useMemo(() => {
    console.log('memo');
    return <BooksList searchString={deferredSearchString} />;
  }, [deferredSearchString]);

  return (
    <div>
      <div>
        Search:{' '}
        <input
          type="text"
          value={searchString}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
        />
        {list}
      </div>
    </div>
  );
}
export default App;
