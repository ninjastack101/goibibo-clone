import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from './sagas/logger';
import combineReducers from './reducers/index';
import { PERSISTENT_STORE_KEY } from './constants/data'
import fetchCityOnLoad from './sagas/onLoadSaga'

const persistConfig = {
  key: PERSISTENT_STORE_KEY,
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(persistedReducer, applyMiddleware(logger,sagaMiddleware));

sagaMiddleware.run(fetchCityOnLoad);

export const persistor = persistStore(store);
