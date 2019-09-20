import React from 'react';
import Tab from '../Tab/Tab';
import { APP_LOGO, ROOT_URL } from '../../constants/links';
import { TAB_NAME } from '../../constants/data';
import './Navbar.scss';

function Navbar() {
  return (
    <div className="headerBox col-md-12 col-sm-12 col-xs-12">
      <div>
        <a href={ROOT_URL} className="hdrLogo"><img alt="logo" src={APP_LOGO} /></a>
      </div>
      <div>
        <ul className="mainLinks">
          <Tab link={ROOT_URL} label={TAB_NAME.FLIGHT} iclassName="icon-flights db blue ico24 lh1-2 padT5 padB5" />
          <Tab link={ROOT_URL} label={TAB_NAME.HOTEL} iclassName="icon-hotels db blue ico28 lh1-2 padT2 padB3" />
          <Tab link={ROOT_URL} label={TAB_NAME.BUS} iclassName="icon-bus db blue ico24 lh1-2 padT5 padB5" />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
