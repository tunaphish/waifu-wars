import { combineReducers } from 'redux';
import divisionList from './divisionListReducer';
import battle from './battleReducer.js';

export default combineReducers({
  divisionList,
  battle,
});
