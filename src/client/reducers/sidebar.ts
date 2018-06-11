// Action
import { ActionTypes, Actions } from '@actions/sidebar';
// Model
import { ISidebar } from '@models/sidebar';

const initState: ISidebar = {
  visible: false,
};

const sidebar = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, visible: !state.visible };
    }
    default: {
      return state;
    }
  }
};

export default sidebar;
