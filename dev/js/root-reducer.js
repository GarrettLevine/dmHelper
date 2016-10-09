import { combineReducers } from 'redux';

import app from './ui-reducer';

const rootReducer = combineReducers({
  app,
});

export default rootReducer;
