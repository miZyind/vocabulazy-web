// Node module
import React from 'react';
import { connect } from 'react-redux';
import { SwitchProps } from 'react-router';
import { Route, RouteProps, Switch, Redirect } from 'react-router-dom';
// Component
import Home from '@containers/home';
import Forum from '@components/forum';
import Note from '@components/note';
import Vocabulary from '@components/vocabulary';
// Model
import { IStore } from '@models/index';

const routesConfig: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/forum',
    exact: true,
    component: Forum
  },
  {
    path: '/vocabulary',
    exact: true,
    component: Vocabulary
  },
  {
    path: '/note',
    exact: true,
    component: Note
  }
];

const ConnectedSwitch = connect(
  ({ router }: IStore, ownProps: SwitchProps) => ({ ...ownProps, location: router.location }),
)(Switch);

const Routes = () => (
  <ConnectedSwitch>
    {routesConfig.map((route, index) => <Route key={index} {...route} />)}
    <Redirect to='/' />
  </ConnectedSwitch>
);

export default Routes;
