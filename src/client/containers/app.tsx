// Node module
import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
// Action
import { LayoutActions } from '@actions/layout';
// Model
import { IStore } from '@models/index';

type StateProps = IStore;
type DispatchProps = typeof LayoutActions;
type OwnProps = {
  name: string;
  version: string;
};

class App extends React.Component<StateProps & DispatchProps & OwnProps> {
  public componentWillMount() {
    const { windowResize } = this.props;
    windowResize(innerWidth);
    window.addEventListener('resize', () => windowResize(innerWidth));
  }

  public render() {
    return <div>name: {this.props.name} <br /> version: {this.props.version}</div>;
  }
}

export default hot(module)(connect<StateProps, DispatchProps, OwnProps>(
  ({ layout }) => ({ layout }),
  (dispatch) => bindActionCreators(LayoutActions, dispatch)
)(App));
