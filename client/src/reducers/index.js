import { combineReducers } from 'redux';
import battle from './battleReducer.js';
import divisionWaifus from './divisionWaifus.js';

export default combineReducers({
  battle,
  divisionWaifus,
});
