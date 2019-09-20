import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import './Gridlist.css';

export default function GridList(props) {
  const { settings, images } = props;
  return (
    <Slider {...settings}>
      {Object.values(images).map((tile) => (
        <div className="img-wrapper">
          <img src={tile} alt="hotel" />
        </div>
      ))}
    </Slider>
  );
}

GridList.propTypes = {
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
};
