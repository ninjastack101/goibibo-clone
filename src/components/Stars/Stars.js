import { range } from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default function Stars(props) {
  const { count } = props;
  return (
    <span className="padL5">
      {range(0, count).map(() => (
        <i className="icon-star3 yellow padR3 ico12" />
      ))}
    </span>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
};
