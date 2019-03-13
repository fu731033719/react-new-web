import { SEARCH_FOCUS, SEARCH_BLUR } from './actionType';

import { fromJS } from 'immutable';
// immutable将state变成一个不可外部修改的定量避免误操state导致的bug
const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前的immutable对象的值和设置的值返回一个全新的对象
    return state.set('focused', true);
  }
  if (action.type === SEARCH_BLUR) {
    return state.set('focused', false);
  }
  return state;
}