export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_BATTLE':
      return action.payload;
    case 'POST_BATTLE':
      return [];
    default:
      return state;
  }
}
