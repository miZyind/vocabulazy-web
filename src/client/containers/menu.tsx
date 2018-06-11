// Node module
import { connect } from 'react-redux';
// Model
import { IStore } from '@models/index';
// Action
import { Actions } from '@actions/menu';
// Component
import Menu from '@components/menu';

const ConnectedMenu = connect(
  ({ menu, router }: IStore) => ({
    ...menu,
    ...router
  }),
  Actions
)(Menu);

export default ConnectedMenu;
