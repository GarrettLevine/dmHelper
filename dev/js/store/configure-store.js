//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
// import thunk from 'redux-thunk';

//*************************************************
//   E X P O R T   S T O R E
//*************************************************
export default function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
}