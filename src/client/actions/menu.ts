// Helper
import createAction from '@helpers/create-action';
import { ActionsUnion } from '@helpers/actions-union';

enum ActionTypes {
  TOGGLE_SIDEBAR = '[menu] toggle sidebar',
  OPEN_SIGN_MODAL = '[menu] open sign modal',
  CLOSE_SIGN_MODAL = '[menu] close sign modal'
}

const Actions = {
  toggleSidebar: () => createAction(ActionTypes.TOGGLE_SIDEBAR),
  openSignModal: () => createAction(ActionTypes.OPEN_SIGN_MODAL),
  closeSignModal: () => createAction(ActionTypes.CLOSE_SIGN_MODAL)
};

type Actions = ActionsUnion<typeof Actions>;

export {
  ActionTypes,
  Actions
};
