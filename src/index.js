import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import routing from './routes/routes';
import { persistor, store } from './store';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {routing}
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
