// Node module
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
// Style
import 'semantic-ui-css/semantic.min.css';
// Container
import App from '@containers/app';
// Store
import configureStore from './store';

// Env
const isDev = process.env.NODE_ENV !== 'production';
const name = process.env.APP_NAME!;
const version = process.env.APP_VERSION!;

/* tslint:disable:no-var-requires */
// Devtools
if (isDev) {
  require('react-perf-devtool').registerObserver(); // React Performance Devtool
  // require('why-did-you-update').whyDidYouUpdate(React); // Why Did You Update Devtool
}
/* tslint:enable:no-var-requires */

const history = createHistory();

const store = configureStore(history);

const Component = isDev ? App : hot(module)(App);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Component name={name} version={version} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
