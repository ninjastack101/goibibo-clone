import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';

const HotelLocation = ({ location }) => (
  <div className="width100 fl padT5 padB15">
    <p className="ico13 grey">{location}</p>
  </div>
);

HotelLocation.propTypes = {
  location: PropTypes.string.isRequired,
};

export default HotelLocation;
