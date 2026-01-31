import React from 'react';

class ErrorComponent extends React.Component {
  render() {
    throw new Error('oh no!');
    return <h1>Error Boundary works!</h1>;
  }
}

export default ErrorComponent;
