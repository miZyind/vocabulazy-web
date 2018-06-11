// Node module
import React from 'react';
import { Store } from 'redux';
import { History } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// Container
import App from '@containers/app';

type Props = {
  store: Store;
  history: History;
};

// Reference: https://github.com/reactjs/react-router-redux/issues/179
const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;
