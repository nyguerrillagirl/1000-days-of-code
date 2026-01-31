import React from 'react';
import './App.css';
import ErrorComponent from './ErrorComponent';

class App extends React.Component {
  componentDidCatch(error, info) {
    console.log('*'.repeat(20));
    console.log(error, info);
    console.log('*'.repeat(20));
  }

  render() {
    return <ErrorComponent />;
  }
}

export default App;
