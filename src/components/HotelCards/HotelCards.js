import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';
import Stars from '../Stars/Stars';
import HotelLocation from './HotelLocation';
import HotelName from './HotelName';
import HotelImage from './HotelImage';
import HotelPrice from './HotelPrice';
import HotelRating from './HotelRating';
import HotelIcon from './HotelIcon';

const HotelCards = (props) => {
  const { hotel } = props;
  return (
    <div className="card-wrapper">
      <div className="width100 fl">
        <HotelImage image={hotel.image} />
        <div className="detail-wrapper">
          <div className="left-details">
            <div className="fl padT2">
              <Stars count={Number(hotel.rating)} />
            </div>
            <HotelIcon />
            <HotelName name={hotel.name} />
            <HotelLocation location={hotel.location} />
          </div>
          <div className="vl" />
          <div className="right-details">
            <HotelRating rating={hotel.rating} />
            <HotelPrice price={hotel.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCards.propTypes = {
  hotel: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HotelCards;
