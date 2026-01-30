import React from 'react';

export default class Timer extends React.Component {
  interval = null;

  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
      initial: 0,
      time: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.time !== state.initial) {
      return {
        initial: props.time,
        time: props.time,
      };
    }
    return null;
  }

  render() {
    console.log('render');
    return <div>{this.state.time}</div>;
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.interval = setInterval(
      () => this.setState((state) => ({ time: state.time + 1 })),
      1000
    );
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
    return newState.time % 2 === 0;
  }
}
