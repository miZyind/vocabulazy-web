// Node module
import { RouterState } from 'react-router-redux';
// Model
import { IMenu } from '@models/menu';

interface IStore {
  router: RouterState;
  layout: ILayout;
  menu: IMenu;
}

interface ILayout {
  displayType: 'mobile' | 'tablet' | 'desktop';
}

export {
  IStore,
  ILayout
};
