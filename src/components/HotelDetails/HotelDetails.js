import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Stars from '../Stars/Stars';
import SingleLineGridList from '../GridList/GridList';
import DetailPageForm from '../DetailPageForm/DetailPageForm';
import './HotelDetails.scss';

function HotelDetails(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    variableWidth: true,
  };
  const { selectedHotel } = props;
  const {
    images, name, rating, location,
  } = selectedHotel;
  const hotelImages = Object.values(images);
  return (
    <div>
      <div className="col-md-12 col-sm-12 pad0"><br /></div>
      <div className="col-md-12 col-sm-12 pad0"><br /></div>
      <div className="pad40">
        <div className="fl blue">
          Goibibo →
        </div>
        <div className="fl blue">
          Hotels →
        </div>
        <div className="fl ">
          {name}
        </div>
      </div>
      <div className="section-group">
        <div className="left-section">
          <p className="width100 fl">
            <span className="fl">
              <Stars count={rating} />
            </span>
            <span className="fl greyLt ico14 padT1">   Hotel</span>
          </p>
          <div className="width100 fl">
            <h1 itemProp="name" className="greyDr ico30  fl width100">{name}</h1>
            <span className="fl width100 fl padT5 greyLt ico14">
              <span>{location}</span>
            </span>
          </div>
          <div className="pad-top-105">
            <span className="tile-label">Hotelier Photos </span>
            <span className="fr blue">
              {hotelImages.length}
              {' '}
              Photos
            </span>
            <SingleLineGridList settings={settings} images={hotelImages} />
          </div>
          <div className="pad-top">
            <span className="tile-label">Travellers Photos </span>
            <span className="fr blue">
              {images.length}
              {' '}
              Photos
            </span>
            <SingleLineGridList settings={settings} images={images} />
          </div>
        </div>
        <div className="right-section">
          <DetailPageForm />
        </div>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedHotel: state.hotels.selectedHotel,
});

HotelDetails.propTypes = {
  selectedHotel: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(HotelDetails);
