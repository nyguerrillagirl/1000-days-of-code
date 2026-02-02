import PropTypes from 'prop-types';
import { StarBorder, Star } from '@mui/icons-material';
import './Rating.css';

function Rating({ item }) {
  const ratings = [];
  for (let i = 1; i <= 5; i++) {
    ratings.push(
      <button className="ratingButton" data-value={i} key={i}>
        {item.rating < i ? <StarBorder /> : <Star />}
      </button>
    );
  }
  return ratings;
}

Rating.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
