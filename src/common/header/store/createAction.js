import { SEARCH_FOCUS, SEARCH_BLUR } from './actionType';

export const searchFocus = () => {
  return {
    type: SEARCH_FOCUS
  }
}
export const searchBlur = () => {
  return {
    type: SEARCH_BLUR
  }
}