import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';

const HotelName = ({ name }) => (
  <div className="width100 fl padT10 padB5">
    <p className="ico20 fb hotel-name">
      {name}
    </p>
  </div>
);

HotelName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HotelName;
