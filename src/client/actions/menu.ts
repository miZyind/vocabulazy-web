// Helper
import { ActionsUnion } from '@helpers/actions-union';
// Action
import { Actions as SidebarActions } from '@actions/sidebar';
import { Actions as SignModalActions } from '@actions/sign-modal';

const Actions = {
  ...SidebarActions,
  ...SignModalActions
};

type Actions = ActionsUnion<typeof Actions>;

export {
  Actions
};
