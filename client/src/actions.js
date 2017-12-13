import axios from 'axios';

export const fetchDivisionList = () => async dispatch => {
  const res = axios.get('api/division/list');
  dispatch({type: 'FETCH_DIVISION_LIST', payload: res});
}
