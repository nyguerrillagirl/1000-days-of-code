import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    console.log('Constructor');
    super(props);
    this.state = {
        inital: 0,
        time: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.time !== state.inital) {
        return { inital: props.time, time: props.time };
    }
    return null;
  }

  render() {
    console.log('Render');
    console.log('\tCurrent time state:', this.state.time);
    return (
      <div>
        {this.state.time}
      </div>
    );
  }
}

