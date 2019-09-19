import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';

const HotelRating = ({ rating }) => (
  <div className="width100 fl">
    <span className="hotelRating secondhigestRating">
      <span className="ico16 fb">{rating}</span>
    /5
    </span>
  </div>
);

HotelRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default HotelRating;
