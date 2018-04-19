// Node module
import React from 'react';
import { hot } from 'react-hot-loader';
import { Dispatch, connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// Action
import { LayoutActions } from '@actions/layout';
// Component
import Menu from '@components/menu';
// Model
import { IApp as IAppStateProps } from '@models/index';
// Route
import Routes from '@routes/index';

interface IAppOwnProps {
  name: string;
  version: string;
}

interface IAppDispatchProps {
  handeWindowResize: () => void;
}

class App extends React.Component<IAppOwnProps & IAppStateProps & IAppDispatchProps> {
  public componentWillMount() {
    const { handeWindowResize } = this.props;
    handeWindowResize();
    window.addEventListener('resize', handeWindowResize);
  }

  public render() {
    return (
      <div>
        <div>name: {this.props.name}</div>
        <div>version: {this.props.version}</div>
      </div>
      // <Router>
      //   <Menu>
      //     <Routes />
      //   </Menu>
      // </Router>
    );
  }
}

const mapStateToProps = (state: IAppStateProps) => ({
  layout: state.layout
});

const mapDispatchToProps = (dispatch: Dispatch<LayoutActions>) => ({
  handeWindowResize() {
    const { innerWidth } = window;
    dispatch(LayoutActions.windowResize(innerWidth));
  }
});

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));
