import {
  UI_OPEN,
  UI_TOGGLE,
  UI_CLOSE,
  // UI_HARD_ENTER,
  // UI_SOFT_ENTER,
  UI_TOGGLE_STYLE,
} from './constants';

const uiInitialState = {
  open: true,
  // TODO: connect to App constants (make a global constants file for:
  //  SIDEPANEL, FLOAT, MESSENGER)
  style: 'MESSENGER',
};

const uiReducer = function UIReducer(state = uiInitialState, action) {
  // console.log('UI', action.type); // commenting out temp to clean up test output

  switch (action.type) {
    case UI_CLOSE:
      return Object.assign({}, state, {
        open: false,
      });

    case UI_TOGGLE:
      return Object.assign({}, state, {
        open: !state.open,
      });

    case UI_OPEN:
      return Object.assign({}, state, {
        open: true,
      });

    case UI_TOGGLE_STYLE:
      return { ...state, style: action.payload };

    default:
      return state;
  }
};

export default uiReducer;
