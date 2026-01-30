import React from 'react';

export default class Timer extends React.Component {
  interval = null;

  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      initial: 0,
      time: 0,
      timestamp: new Date(Date.now()).toLocaleTimeString(),
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.time !== state.initial) {
      return {
        initial: props.time,
        time: props.time,
        timestamp: new Date(Date.now()).toLocaleTimeString(),
      };
    }
    return null;
  }

  render() {
    return (
      <div>
        <div>Time prop: {this.props.time}</div>
        <div>Updated at: {this.state.timestamp}</div>
      </div>
    );
  }


  componentDidMount() {
    console.log('componentDidMount');
    //this.interval = setInterval(
    //  () => this.setState((state) => ({ time: state.time + 1 })),
    //  1000
    //);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(oldProps, oldState) {
    console.log('getSnapshotBeforeUpdate');
    return Date.now();
  }

  componentDidUpdate(oldProps, oldState, snapshot) {
    console.log('==> componentDidUpdate');
    if (oldState.initial !== this.state.initial) {
      this.setState({...this.timestamp = new Date(snapshot).toLocaleTimeString() });
    }
  }
}
