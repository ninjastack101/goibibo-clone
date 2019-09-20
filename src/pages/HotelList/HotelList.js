import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { times } from 'lodash';
import Navbar from '../../components/Navbar/Navbar';
import HorizontalSearchbar from '../../components/HorizontalSearchBar/HorizontalSearchBar';
import HotelCards from '../../components/HotelCards/HotelCards';
import Filters from '../../components/Filters/Filters';
import { DEFAULT_HOTEL_PROPS } from '../../constants/data';

function HotelList(props) {
  const { hotelList } = props;

  const renderHotelList = () => {
    if (hotelList.length === 0) {
      return times(2, DEFAULT_HOTEL_PROPS).map(
        (hotel) => (<HotelCards hotel={hotel} />),
      );
    }

    return hotelList.map(
      (hotel) => (<HotelCards hotel={hotel} />),
    );
  };

  return (
    <div>
      <Navbar />
      <HorizontalSearchbar />
      <div className="fl width100 padTB10">
        <div className=" maxWidth1134 marginAuto width100" />
      </div>
      <Filters />
      {
        renderHotelList()
      }
    </div>
  );
}


const mapStateToProps = (state) => ({
  hotelList: state.hotels.list,
});

HotelList.propTypes = {
  hotelList: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default withRouter(connect(mapStateToProps)(HotelList));
