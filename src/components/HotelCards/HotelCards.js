import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import './HotelCard.css';
import Stars from '../Stars/Stars';
import HotelLocation from './HotelLocation';
import HotelName from './HotelName';
import HotelImage from './HotelImage';
import HotelPrice from './HotelPrice';
import HotelRating from './HotelRating';
import HotelIcon from './HotelIcon';
import { setSelectedHotel } from '../../actions/hotel.actions';

function HotelCards(props) {
  const { hotel, setSelectedHotel } = props;
  const {
    image, rating, name, location, price,
  } = hotel;
  return (
    <div className="card-wrapper" onClick={() => setSelectedHotel(hotel)}>
      <div className="width100 fl">
        <HotelImage image={image} />
        <div className="detail-wrapper">
          <div className="left-details">
            <div className="fl padT2">
              <Stars count={Number(rating) || <Skeleton />} />
            </div>
            <HotelIcon />
            <HotelName name={name || <Skeleton />} />
            <HotelLocation location={location || <Skeleton count={3} />} />
          </div>
          <div className="vl" />
          <div className="right-details">
            <HotelRating rating={rating || <Skeleton />} />
            <HotelPrice price={price || <Skeleton />} />
          </div>
        </div>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  hotelList: state.hotels.list,
});

HotelCards.propTypes = {
  hotel: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedHotel: PropTypes.func.isRequired,
};

export default (connect(mapStateToProps, { setSelectedHotel })(HotelCards));
