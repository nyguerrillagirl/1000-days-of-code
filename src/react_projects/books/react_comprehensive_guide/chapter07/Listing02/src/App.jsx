// @flow
import React from 'react';
import type { Node } from 'react';

function App(): Node {
  let name: string = 'World';

  name = 1337;
  return (
    <div className="App">
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
