export function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'UPDATE_USER_WORKOUTS':
      return {...state, workouts: [...state.workouts,action.workout]};
    case 'UPDATE_SPECIFIC_WORKOUT':
        //filter to find workout_id and add it to the workout
      return {...state, workouts: [...state.workouts, action.workout]};
    case 'UPDATE_USER_USERWORKOUTS':
      return {...state, user_workouts: [...state.user_workouts, action.user_workout]};
    case 'DELETE_USER_WORKOUTS':
        let newWorkouts = state.workouts
        newWorkouts.splice(newWorkouts.indexOf(action.id), 1)
      return {...state, workouts: newWorkouts};
    default:
      return state;
  }

}
