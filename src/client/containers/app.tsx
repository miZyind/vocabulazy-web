// Node module
import React from 'react';
import { hot } from 'react-hot-loader';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Action
import { LayoutActions } from '@actions/layout';
// Model
import { IStore } from '@models/index';

type PropsUnion = {
  State: IStore;
  Dispatch: typeof LayoutActions;
  Own: {
    name: string;
    version: string;
  };
};

class App extends React.Component<Subset<PropsUnion>> {
  public componentWillMount() {
    const { windowResize } = this.props;
    // windowResize();
    // window.addEventListener('resize', windowResize);
  }

  public render() {
    return <div>name: {this.props.name} <br /> version: {this.props.version}</div>;
  }
}

export default connect<PropsUnion>(
  ({ layout }) => ({ layout }),
  (dispatch) => bindActionCreators(LayoutActions, dispatch)
)(App);
