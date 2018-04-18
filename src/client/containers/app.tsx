// Node module
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
// Component
import Menu from '@components/menu';
// Route
import Routes from '@routes/index';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <Router>
        <Menu>
          <Routes />
        </Menu>
      </Router>
    );
  }
}

export default hot(module)(App);
