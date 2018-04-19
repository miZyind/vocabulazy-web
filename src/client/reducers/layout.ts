// Action
import { LayoutActionTypes, LayoutActions } from '@actions/layout';
// Model
import { ILayout } from '@models/index';

const initState: ILayout = {
  displayType: 'desktop'
};

const layout = (state = initState, action: LayoutActions) => {
  switch (action.type) {
    case LayoutActionTypes.WINDOW_RESIZE: {
      const mobileWidth = 425;
      const tabletWidth = 768;
      const { innerWidth } = action.payload;
      const displayType =
        innerWidth <= mobileWidth
          ? 'mobile'
          : mobileWidth < innerWidth && innerWidth <= tabletWidth
            ? 'tablet'
            : 'desktop';
      return { ...state, displayType };
    }
    default: {
      return state;
    }
  }
};

export default layout;
