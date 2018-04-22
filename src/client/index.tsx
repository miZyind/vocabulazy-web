// Node module
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Reducer
import rootReducer from '@reducers/index';
// Style
import '@styles/index.css';
import 'semantic-ui-css/semantic.min.css';
// Container
import App from '@containers/app';
// Env
const name = process.env.APP_NAME!;
const version = process.env.APP_VERSION!;
// Store
const store = createStore(rootReducer);

render(
  <Provider key={Date.now()} store={store}>
    <App name={name} version={version} />
  </Provider>,
  document.getElementById('root')
);
