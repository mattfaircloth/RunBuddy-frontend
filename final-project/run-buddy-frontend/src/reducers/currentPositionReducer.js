export function currentPositionReducer(state = {}, action) {
  switch (action.type) {
    case 'SET_CURRENT_POSITION':
      return action.currentPosition;
    default:
      return state;
  }
}
