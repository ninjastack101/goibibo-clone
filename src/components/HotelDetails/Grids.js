import React from 'react';
import PropTypes from 'prop-types';
import SingleLineGridList from '../GridList/GridList';
import './HotelDetails.scss';

const Grids = ({ images, settings }) => (
  <div>
    <div className="pad-top-105">
      <span className="tile-label">Hotelier Photos </span>
      <span className="fr blue">
        {images.length}
        {' '}
        Photos
      </span>
      <SingleLineGridList settings={settings} images={images} />
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
);

Grids.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Grids;
