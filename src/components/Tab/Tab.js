import React from 'react';
import './Tab.css'

const Tab = (props) => (
  <div className='tab'>
    <a href={props.link}>
      <i className={props.iclassName}>
      </i>
      <span >
        {props.label}
      </span>
    </a>
  </div>
);

export default Tab;