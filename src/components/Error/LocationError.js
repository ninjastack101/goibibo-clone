import React from 'react';

export default function LocationError() {
  return (
    <span className="alert_msg failure_msg fl">
      <b className="status_info fl">ERROR: </b>
      <span className="status_cont" id="homepageError_desc">
        Please enter a valid location
      </span>
    </span>
  );
}
