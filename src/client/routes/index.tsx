import React from 'react';
import { Route, RouteProps, Switch, Redirect } from 'react-router-dom';

const routes: RouteProps[] = [
  {
    // name: 'Home',
    path: '/',
    exact: true,
    // component: Home
  },
  {
    // name: 'Forum',
    path: '/forum',
    exact: true,
    // component: Forum
  },
  {
    // name: 'Vocabulary',
    path: '/vocabulary',
    exact: true,
    // component: Vocabulary
  },
  {
    // name: 'Note',
    path: '/note',
    exact: true,
    // component: Note
  }
];

export default () => (
  <Switch>
    {routes.map((route, index) => <Route key={index} {...route} />)}
    <Redirect to='/' />
  </Switch>
);
