import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import logger from './sagas/logger';
import combineReducers from './reducers/index';
import { PERSISTENT_STORE_KEY } from './constants/data';
import fetchCityOnLoad from './sagas/onLoadSaga';
import catchError from './sagas/errorSaga';
import setHotel from './sagas/hotelSaga';

const persistConfig = {
  key: PERSISTENT_STORE_KEY,
  storage,
};


export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, combineReducers(history));

export const store = createStore(persistedReducer, applyMiddleware(
  routerMiddleware(history), logger, sagaMiddleware,
));

sagaMiddleware.run(fetchCityOnLoad);
sagaMiddleware.run(catchError);
sagaMiddleware.run(setHotel);

export const persistor = persistStore(store);
