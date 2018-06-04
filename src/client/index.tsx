// Node module
import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
// Style
import '@styles/index.css';
import 'semantic-ui-css/semantic.min.css';
// Root
import Root from '@components/root';
// Store
import configureStore from './store';

// Env
const isDev = process.env.NODE_ENV !== 'production';
const history = createHistory();
const store = configureStore(history);

/* tslint:disable:no-var-requires */
// Devtools
if (isDev) {
  require('react-perf-devtool').registerObserver(); // React Performance Devtool
  // require('why-did-you-update').whyDidYouUpdate(React); // Why Did You Update Devtool
}
/* tslint:enable:no-var-requires */

const Component = isDev ? hot(module)(Root) : Root;

render(
  <Component store={store} history={history} />,
  document.getElementById('root')
);
