// Helper
import createAction from '@helpers/create-action';
import { ActionsUnion } from '@helpers/actions-union';

enum ActionTypes {
  WINDOW_RESIZE = '[layout] window resize'
}

const Actions = {
  windowResize: (innerWidth: number) => createAction(
    ActionTypes.WINDOW_RESIZE,
    { innerWidth }
  )
};

type Actions = ActionsUnion<typeof Actions>;

export {
  ActionTypes,
  Actions
};
