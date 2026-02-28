import PropTypes from "proptypes";

export const BookPropType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired
});
