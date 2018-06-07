// Action
import { ActionTypes, Actions } from '@actions/menu';
// Model
import { IMenu } from '@models/menu';

const initState: IMenu = {
  sideBarVisible: false,
  isSignModalOpen: false
};

const menu = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, sideBarVisible: !state.sideBarVisible };
    }
    case ActionTypes.OPEN_SIGN_MODAL: {
      return { ...state, isSignModalOpen: true };
    }
    case ActionTypes.CLOSE_SIGN_MODAL: {
      return { ...state, isSignModalOpen: false };
    }
    default: {
      return state;
    }
  }
};

export default menu;
