import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  state = {
    time: 0,
  };

  handleClick() {
    this.setState({ time: Math.floor(Math.random() * 10) });
  }

  render() {
    return (
      <div className="App">
        <Timer time={this.state.time} />
        <button onClick={() => this.handleClick()}>set</button>
      </div>
    );
  }
}

export default App;
