import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
    return (
        <h1>Hello, {name}!</h1>
    );
}

Greeting.defaultProps = {
    name: 'Guest'
};

Greeting.propTypes = {
    name: PropTypes.string
};

export default Greeting;