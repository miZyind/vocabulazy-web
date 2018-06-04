// Action
import { ActionTypes, Actions } from '@actions/menu';
// Model
import { IMenu } from '@models/menu';

const initState: IMenu = {
  sideBarVisible: false,
  isModalOpen: false
};

const menu = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, sideBarVisible: !state.sideBarVisible };
    }
    case ActionTypes.OPEN_SIGN_MODAL: {
      return { ...state, isModalOpen: true };
    }
    default: {
      return state;
    }
  }
};

export default menu;
