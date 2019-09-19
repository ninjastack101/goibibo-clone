import React from 'react';
import PropTypes from 'prop-types';
import './HotelCard.css';

const HotelPrice = ({ price }) => (
  <div className="width100 fl padT15 txtRight">
    <div className="dib vMid">
      <span className="dib grey ico13 vMid ">
        <i className="icon-rupee dib ico9 vMid" />
        <span className="dib vMid strike">2100</span>
      </span>
      <span className="dib padL5 ico25 fb vMid">
        <i className="icon-rupee ico17 dib" />
        {price}
      </span>
    </div>
  </div>
);

HotelPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default HotelPrice;
