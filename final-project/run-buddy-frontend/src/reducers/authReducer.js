export function authReducer(state = {}, action) {

  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'UPDATE_USER_WORKOUTS':
      return {...state, workouts: action.workouts};
    default:
      return state;
  }

}
