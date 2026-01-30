import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  state = {
    time: 0,
  };

  handleClick() {
    console.log('Button clicked');
    var new_value = Math.floor(Math.random() * 10);
    console.log('New time value:', new_value);
    this.setState({ time: new_value });
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
