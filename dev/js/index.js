//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
import routes from './routes/routes';
import configureStore from './store/configure-store.js';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//**************************************************
//    R E N D E R
//**************************************************
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.querySelector('.main'));
