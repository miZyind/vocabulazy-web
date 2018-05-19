// Node module
import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { createStore, compose, applyMiddleware } from 'redux';
// Reducer
import rootReducer from '@reducers/index';

// Env
const isDev = process.env.NODE_ENV !== 'production';

const composeEnhancers = isDev
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const configureStore = (history: History) => {
  const routerEnhancer = applyMiddleware(routerMiddleware(history));
  const store = createStore(
    rootReducer,
    composeEnhancers(routerEnhancer)
  );
  if (isDev && module.hot) {
    module.hot.accept('@reducers/index', () => store.replaceReducer(rootReducer));
  }
  return store;
};

export default configureStore;
