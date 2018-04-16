// Node module
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
// Route
import Routes from '@routes/index';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default hot(module)(App);
