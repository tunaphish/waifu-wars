export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_DIVISION_LIST':
      return action.payload.data;
    default:
      return state;
  }
}
