// import { combineReducers } from 'redux';
// redux-immutable提供一个combineReducers方法 在总的store中将总的抛出的state对象变为一个immutable对象
import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer';
// redux-immutable
const reducer =  combineReducers({
  header: headerReducer
});

export default reducer;