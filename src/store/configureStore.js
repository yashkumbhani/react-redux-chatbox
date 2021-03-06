import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/ReduxDevTools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);


export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
