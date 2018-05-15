interface IMenu {
  activeItem: ActiveItem;
  sideBarVisible: boolean;
}

enum ActiveItem {
  home = 'home',
  forum = 'forum',
  vocabulary = 'vocabulary',
  note = 'note'
}

export {
  IMenu,
  ActiveItem
};
