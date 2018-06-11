// Node module
import { RouterState } from 'react-router-redux';
// Model
import { ILayout } from '@models/layout';
import { IMenu } from '@models/menu';

interface IStore {
  router: RouterState;
  layout: ILayout;
  menu: IMenu;
}

export {
  IStore
};
