// Action
import { ActionTypes, Actions } from '@actions/menu';
// Model
import { IMenu, ActiveItem } from '@models/menu';

const initState: IMenu = {
  activeItem: ActiveItem.home,
  sideBarVisible: false
};

const menu = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_ITEM: {
      const { activeItem } = action.payload;
      return { ...state, activeItem };
    }
    case ActionTypes.TOGGLE_SIDEBAR: {
      return { ...state, sideBarVisible: !state.sideBarVisible };
    }
    default: {
      return state;
    }
  }
};

export default menu;
