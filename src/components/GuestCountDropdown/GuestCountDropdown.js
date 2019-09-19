import React from 'react';
import PropTypes from 'prop-types';
import NumberDropdown from '../NumberDropdown/NumberDropdown';
import './GuestCountDropdown.scss';

const GuestCountDropdown = (props) => {
  const { getcount, count, toggleIsVisible } = props;
  return (
    <span className="guest-dropdown">
      <div className="paxContainer fl">
        <div
          onClick={toggleIsVisible}
          id="pax_close"
          className="icon-cancel-circle fr marginT10 marginR10 fr greyDr mobdn"
        />
        <div className="paxWrap">
          <div className="dropdown-group">
            <div className="fl widthx">
              <NumberDropdown
                getcount={getcount}
                value={count.room}
                from={1}
                to={9}
                name="Room(s)"
              />
            </div>
            <div className="fl widthx">
              <NumberDropdown
                getcount={getcount}
                value={count.adult}
                from={1}
                to={21}
                name="Adult"
              />
            </div>
            <div className="fl widthx">
              <NumberDropdown
                getcount={getcount}
                value={count.children}
                from={0}
                to={11}
                name="Children"
              />
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

GuestCountDropdown.propTypes = {
  count: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleIsVisible: PropTypes.func.isRequired,
  getcount: PropTypes.func.isRequired,
};


export default GuestCountDropdown;
