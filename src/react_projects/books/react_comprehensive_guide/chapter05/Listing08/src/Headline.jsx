import React from 'react';
import PropTypes from 'prop-types';

class Headline extends React.Component {
  static defaultProps = {
    title: 'STAK OF BOOKS',
  };

  state = {
    title: '',
  };

  constructor(props) {
    super(props);

    this.state.title = props.title;
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}

Headline.propTypes = {
  title: PropTypes.string,
};

export default Headline;
