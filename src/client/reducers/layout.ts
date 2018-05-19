// Action
import { ActionTypes, Actions } from '@actions/layout';
// Model
import { ILayout } from '@models/index';

const initState: ILayout = {
  displayType: 'desktop'
};

const layout = (state = initState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.WINDOW_RESIZE: {
      const mobileWidth = 425;
      const tabletWidth = 993;
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
