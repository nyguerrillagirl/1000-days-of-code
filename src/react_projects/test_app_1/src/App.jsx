import React from 'react';
import AppInner from './AppInner';

class App extends React.Component {
  state = { innerComponent: <AppInner /> };

  componentDidMount() {
    setTimeout( () => {
      this.setState( { innerComponent: <div>unmounted</div>})
    }, 5000);
  }

  render() {
    console.log("Inside App render()");
    return (
      <div>
        <h1>Main App Component</h1>
        {this.state.innerComponent}
      </div>
    );
  }
}


export default App;
