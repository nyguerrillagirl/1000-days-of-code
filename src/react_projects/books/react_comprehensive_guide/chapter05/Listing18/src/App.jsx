import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';

class App extends Component {
  state = {
    time: 0,
    show: true,
  };

  handleClick() {
    this.setState({ time: Math.floor(Math.random() * 10) });
  }

  handleToggleShow() {
    this.setState((state) => ({ ...state, show: !state.show }));
  }

  render() {
    return (
      <div className="App">
        {this.state.show && <Timer time={this.state.time} />}
        <button onClick={() => this.handleClick()}>set</button>
        <button onClick={() => this.handleToggleShow()}>toggle</button>
      </div>
    );
  }
}

export default App;
