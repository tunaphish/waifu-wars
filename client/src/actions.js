import axios from 'axios';

export const fetchDivisionList = () => async dispatch => {
  const res = await axios.get('api/division/list');
  dispatch({type: 'FETCH_DIVISION_LIST', payload: res});
}

export const fetchBattle = () => async dispatch => {
  const res = await axios.get('api/division/1/battle');
  dispatch({type: 'FETCH_BATTLE', payload: res});
}
