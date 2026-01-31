import React from 'react';
import './App.css';
import ErrorComponent from './ErrorComponent';

class App extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      error: error.message,
    };
  }

  componentDidCatch(error, info) {
    console.log('*'.repeat(20));
    console.log(error, info);
    console.log('*'.repeat(20));
  }

  render() {
    if (this.state.error) {
      return <div>An error has occurred: {this.state.error}</div>;
    } else {
      return <ErrorComponent />;
    }
  }
}

export default App;
