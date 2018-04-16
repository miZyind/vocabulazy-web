// Node module
import React from 'react';
import { Route, RouteProps, Switch, Redirect } from 'react-router-dom';
// Component
import Home from '@components/home';
import Forum from '@components/forum';
import Vocabulary from '@components/vocabulary';
import Note from '@components/note';

const routes: RouteProps[] = [
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

export default () => (
  <Switch>
    {routes.map((route, index) => <Route key={index} {...route} />)}
    <Redirect to='/' />
  </Switch>
);
