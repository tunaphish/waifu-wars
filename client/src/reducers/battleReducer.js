export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_BATTLE':
      return action.payload;
    default:
      return state;
  }
}
