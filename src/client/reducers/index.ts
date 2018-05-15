// Node module
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Model
import { IStore } from '@models/index';
// Reducer
import layout from '@reducers/layout';
import menu from '@reducers/menu';

export default combineReducers<IStore>({
  router: routerReducer,
  layout,
  menu
} as any);
