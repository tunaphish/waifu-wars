export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_DIVISION_WAIFUS':
      return action.payload;
    default:
      return state;
  }
}
