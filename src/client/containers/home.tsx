// Node module
import { connect } from 'react-redux';
// Model
import { IStore } from '@models/index';
// Action
import { Actions } from '@actions/menu';
// Component
import Home from '@components/home';

export default connect(
  ({ layout }: IStore) => ({
    isMobileDisplay: layout.displayType !== 'desktop'
  }),
  Actions
)(Home);
