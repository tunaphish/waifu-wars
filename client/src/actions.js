import axios from 'axios';

export const fetchDivisionList = () => async dispatch => {
  const res = await axios.get('api/division/list');
  dispatch({type: 'FETCH_DIVISION_LIST', payload: res.data});
}

export const fetchBattle = () => async dispatch => {
  const res = await axios.get('api/division/1/battle');
  dispatch({type: 'FETCH_BATTLE', payload: res.data});
}

export const postBattle = (firstWaifuWon, waifus) => async dispatch => {
  const battleResult = firstWaifuWon ? { winner: waifus[0], loser: waifus[1] } : { winner: waifus[1], loser: waifus[0] };
  await axios.post('api/division/1/battle', battleResult);
  dispatch({type: 'POST_BATTLE'});
}

export const fetchDivisionWaifus = () => async dispatch => {
  const res = await axios.get('api/division/1/ranking');
  dispatch({type: 'FETCH_DIVISION_WAIFUS', payload: res.data});
}
