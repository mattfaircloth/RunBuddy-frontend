export function authReducer(state = {}, action) {
  console.log(state);

  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'UPDATE_USER_WORKOUTS':
    //filter to find workout_id and add it to the workout
      return {...state, workouts: [action.workout]};
    case 'UPDATE_SPECIFIC_WORKOUT':
    //filter to find workout_id and add it to the workout
    let arr = state.available_workouts
    let flattened = [].concat.apply([],arr);
    let specificWorkout = flattened.find(workout => workout.id === action.workout_id)
    //let uniqueWorkouts = [...new Set(workoutIds)];

    //.map(aws => aws.find(workout => workout.id === action.workout_id))
    //let specificWorkout = specificWorkouts.find(id => id === action.workout_id)

    // === action.workout_id
  
      return {...state, workouts: [...state.workouts, specificWorkout]};
    case 'UPDATE_USER_USERWORKOUTS':
      return {...state, user_workouts: [...state.user_workouts, action.user_workout]};
    default:
      return state;
  }

}
