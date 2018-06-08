// Action
import { ActionTypes, Actions } from '@actions/sign-modal';
// Model
import { ISignModal } from '@models/sign-modal';

const initState: ISignModal = {
  isOpen: true,
  isSignInMode: true
};

const signModal = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL: {
      const { isSignInMode } = action.payload;
      return { ...state, isOpen: true, isSignInMode };
    }
    case ActionTypes.SWITCH_MODE: {
      return { ...state, isSignInMode: !state.isSignInMode };
    }
    case ActionTypes.CLOSE_MODAL: {
      return { ...state, isOpen: false };
    }
    default: {
      return state;
    }
  }
};

export default signModal;
