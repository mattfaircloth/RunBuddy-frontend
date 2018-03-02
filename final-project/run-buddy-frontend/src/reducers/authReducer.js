export function authReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    case 'UPDATE_USER_WORKOUTS':
      return {...state, workouts: [...state.workouts, action.workout]};
    case 'UPDATE_SPECIFIC_WORKOUT':
        //filter to find workout_id and add it to the workout
      return {...state, workouts: [...state.workouts, action.workout]};
    case 'UPDATE_USER_USERWORKOUTS':
      //add logic so you can only join the workout once
      if (!state.user_workouts.includes(action.user_workout)) {
        return {...state, user_workouts: [...state.user_workouts, action.user_workout]};
      }
    case 'DELETE_USER_WORKOUTS':
        let newWorkouts = state.workouts
        newWorkouts.splice(newWorkouts.indexOf(action.id), 1)
      return {...state, workouts: newWorkouts};
    case 'UPDATE_USER_FRIENDS':
      return {...state, user_friends: [...state.user_friends, action.user_friend]};
    case 'UPDATE_SPECIFIC_FRIEND':
        //debugger
        return {...state, friends: [...state.friends, action.friend]};
    case 'UPDATE_ASSOCIATION_WITH_WORKOUTS'
          //FINISH THIS
    case 'DELETE_USER_FRIENDS':
          let newFriends = state.friends
          newFriends.splice(newFriends.indexOf(action.id), 1)
          console.log('New Friends', newFriends)
      return {...state, friends: newFriends};
    case 'DELETE_ASSOCIATION_WITH_WORKOUTS':
          let newAss = state.associations_with_workouts
          newAss.splice(newAss.indexOf(action.id), 1)
          console.log('New Associations', newAss)
          debugger
        return {...state, associations_with_workouts: newAss}

    default:
      return state;
  }
}
