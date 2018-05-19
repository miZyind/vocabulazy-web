// Helper
import createAction from '@helpers/create-action';
import { ActionsUnion } from '@helpers/actions-union';
// Model
import { ActiveItem } from '@models/menu';

enum ActionTypes {
  SET_ACTIVE_ITEM = '[menu] set active item',
  TOGGLE_SIDEBAR = '[menu] toggle sidebar'
}

const Actions = {
  setActiveItem: (activeItem: ActiveItem) => createAction(
    ActionTypes.SET_ACTIVE_ITEM,
    { activeItem }
  ),
  toggleSidebar: () => createAction(ActionTypes.TOGGLE_SIDEBAR)
};

type Actions = ActionsUnion<typeof Actions>;

export {
  ActionTypes,
  Actions
};
