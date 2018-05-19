// Node module
import { connect } from 'react-redux';
// Model
import { IStore } from '@models/index';
// Action
import { Actions } from '@actions/menu';
// Component
import Menu from '@components/menu';

export default connect(
  ({ menu }: IStore) => menu,
  Actions
)(Menu);
