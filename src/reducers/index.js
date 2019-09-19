import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import cities from './city';
import hotels from './hotel';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  cities,
  hotels,
});

export default createRootReducer;
