import { combineReducers } from 'redux';
import divisionList from './divisionListReducer';
import battle from './battleReducer.js';
import divisionWaifus from './divisionWaifus.js';

export default combineReducers({
  divisionList,
  battle,
  divisionWaifus,
});
