interface IApp {
  layout: ILayout;
}

interface ILayout {
  displayType: 'mobile' | 'tablet' | 'desktop';
}

export {
  IApp,
  ILayout
};
