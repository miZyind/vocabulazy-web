// Node module
import { combineReducers } from 'redux';
// Model
import { IStore } from '@models/index';
// Reducer
import layout from '@reducers/layout';

export default combineReducers({
  layout
} as any);
