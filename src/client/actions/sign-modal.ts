// Helper
import createAction from '@helpers/create-action';
import { ActionsUnion } from '@helpers/actions-union';

enum ActionTypes {
  OPEN_MODAL = '[sign-modal] open modal',
  SWITCH_MODE = '[sign-modal] switch mode',
  CLOSE_MODAL = '[sign-modal] close modal',
}

const Actions = {
  openModal: (isSignInMode: boolean) => createAction(
    ActionTypes.OPEN_MODAL,
    { isSignInMode }
  ),
  switchMode: () => createAction(ActionTypes.SWITCH_MODE),
  closeModal: () => createAction(ActionTypes.CLOSE_MODAL)
};

type Actions = ActionsUnion<typeof Actions>;

export {
  ActionTypes,
  Actions
};
