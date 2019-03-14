import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from './actionType';
import axios from 'axios';
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
const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list: list
  }
}
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/index.json').then(res => {
      console.log(res.data);
      if (res.data.code === 200) {
        const actions = changeList(res.data.data);
        dispatch(actions);
      }
    }).catch(() => {
      console.log('error');
    })
  }
}