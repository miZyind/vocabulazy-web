// Node module
import { combineReducers } from 'redux';
// Model
import { IApp } from '@models/index';
// Reducer
import layout from '@reducers/layout';

export default combineReducers<IApp>({
  layout
} as any);
