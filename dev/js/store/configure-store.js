//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../root-reducer';

//*************************************************
//   E X P O R T   S T O R E
//*************************************************
export default function configureStore(initialState) {
  const route = routerMiddleware(browserHistory);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, route),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}
