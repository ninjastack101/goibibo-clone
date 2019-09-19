import React from 'react';
import PropTypes from 'prop-types';
import './Tab.scss';

function Tab(props) {
  const { label, iclassName, link } = props;
  return (
    <div className="tab">
      <a href={link}>
        <i className={iclassName} />
        <span>
          {label}
        </span>
      </a>
    </div>
  );
}

Tab.propTypes = {
  link: PropTypes.string.isRequired,
  iclassName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tab;
