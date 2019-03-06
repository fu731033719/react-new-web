import { SEARCH_FOCUS, SEARCH_BLUR } from './actionType';
const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if (action.type === SEARCH_BLUR) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }
  return state;
}