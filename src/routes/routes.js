import React from 'react';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import HotelSearch from '../pages/HotelSearch/HotelSearch';
import { HOTEL_LIST_URL, HOTEL_DETAIL_URL, ROOT_URL } from '../constants/links';
import HotelList from '../pages/HotelList/HotelList';
import HotelDetail from '../pages/HotelDetail/HotelDetail';
import { history } from '../store';

const routing = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={ROOT_URL} component={withRouter(HotelSearch)} />
      <Route exact path={HOTEL_LIST_URL} component={withRouter(HotelList)} />
      <Route exact path={HOTEL_DETAIL_URL} component={withRouter(HotelDetail)} />
    </Switch>
  </ConnectedRouter>
);

export default routing;
