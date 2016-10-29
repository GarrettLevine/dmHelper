import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from './ui-reducer';
import user from './user/user-reducer';

const rootReducer = combineReducers({
  app,
  routing: routerReducer,
  user,
});

export default rootReducer;
