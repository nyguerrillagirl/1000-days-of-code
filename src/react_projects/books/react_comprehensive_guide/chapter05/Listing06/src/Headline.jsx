import React from 'react';
import PropTypes from 'prop-types';

class Headline extends React.Component {
  static defaultProps = {
    title: 'Figgy\'s Leading the Pack',
  };

  render() {
    return <h1>{this.props.title}</h1>;
  }
}

Headline.propTypes = {
  title: PropTypes.string,
};

export default Headline;
