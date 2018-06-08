// Node module
import { combineReducers } from 'redux';
// Reducer
import sidebar from '@reducers/sidebar';
import signModal from '@reducers/sign-modal';

export default combineReducers({
  sidebar,
  signModal
});
