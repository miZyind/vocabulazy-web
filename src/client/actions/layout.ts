// Type
import { ActionsUnion } from '#typings/actions-union';
// Helper
import createAction from '@helpers/create-action';

enum LayoutActionTypes {
  WINDOW_RESIZE = '[layout] window resize'
}

const LayoutActions = {
  windowResize: (innerWidth: number) => createAction(LayoutActionTypes.WINDOW_RESIZE, { innerWidth })
};

type LayoutActions = ActionsUnion<typeof LayoutActions>;

export {
  LayoutActionTypes,
  LayoutActions
};
