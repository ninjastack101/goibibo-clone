import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HotelSearch from '../pages/HotelSearch/HotelSearch';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={HotelSearch} />
    </Switch>
  </Router>
);

export default routing;