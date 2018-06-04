// Helper
import createAction from '@helpers/create-action';
import { ActionsUnion } from '@helpers/actions-union';

enum ActionTypes {
  TOGGLE_SIDEBAR = '[menu] toggle sidebar'
}

const Actions = {
  toggleSidebar: () => createAction(ActionTypes.TOGGLE_SIDEBAR)
};

type Actions = ActionsUnion<typeof Actions>;

export {
  ActionTypes,
  Actions
};
