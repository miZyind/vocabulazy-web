interface IStore {
  layout: ILayout;
}

interface ILayout {
  displayType: 'mobile' | 'tablet' | 'desktop';
}

export {
  IStore,
  ILayout
};
