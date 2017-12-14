export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_DIVISION_LIST':
      return action.payload;
    default:
      return state;
  }
}
