import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';

const HotelImage = ({ image }) => (
  <div className="col-md-4 col-sm-4 col-xs-12 pad10 image-wrapper">
    <div className="width100 fl">
      <img
        src={image}
        className="hotelImg imgfitCover"
        alt="hotel"
      />
    </div>
  </div>
);

HotelImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default HotelImage;
