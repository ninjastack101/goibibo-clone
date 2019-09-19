import React from 'react';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HotelSearch from '../pages/HotelSearch/HotelSearch';
import { HOTEL_FORM, HOTEL_LIST_URL } from '../constants/links';
import HotelList from '../pages/HotelList/HotelList';
import { history } from '../store';

const routing = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={HOTEL_FORM} component={withRouter(HotelSearch)} />
      <Route exact path={HOTEL_LIST_URL} component={HotelList} />
    </Switch>
  </ConnectedRouter>
);

export default routing;
