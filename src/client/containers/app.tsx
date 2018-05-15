// Node module
import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
// Model
import { IStore } from '@models/index';
// Action
import { Actions } from '@actions/layout';
// Component
import Routes from '@routes/index';
import Menu from '@containers/menu';

type Props = IStore & typeof Actions & {
  name: string;
  version: string;
};

class App extends React.Component<Props> {
  public componentWillMount() {
    const { windowResize } = this.props;
    windowResize(innerWidth);
    window.addEventListener('resize', () => windowResize(innerWidth));
  }

  public render() {
    return (
      <Menu isMobileDisplay={this.props.layout.displayType !== 'desktop'}>
        <Routes />
      </Menu>
    );
  }
}

export default hot(module)(connect(
  ({ layout }: IStore) => ({ layout }),
  Actions
)(App));
