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
      } else {
        return {...state, user_workouts: [...state.user_workouts] }
      }
    case 'DELETE_USER_WORKOUTS':
        let newWorkouts = state.workouts
        //newWorkouts.splice(newWorkouts.indexOf(action.id), 1)
        let x = newWorkouts.filter(workout => workout.id !== action.id)
      return {...state, workouts: x};
    case 'DELETE_USER_USERWORKOUTS':
        let newUserWorkouts = state.user_workouts.filter(uw => uw.id !== action.id)
        //console.log('New User Workouts', newUserWorkouts);
        return {...state, user_workouts: newUserWorkouts}
    case 'UPDATE_USER_FRIENDS':
      return {...state, user_friends: [...state.user_friends, action.user_friend]};
    case 'UPDATE_SPECIFIC_FRIEND':
        return {...state, friends: [...state.friends, action.friend]};
    case 'UPDATE_ASSOCIATION_WITH_WORKOUTS':


          return {...state, associations_with_workouts: [...state.associations_with_workouts, action.friend, ...action.friend.friends]}
    case 'DELETE_USER_FRIENDS':
          let newFriends = state.friends.filter(friend => friend.id !== action.id)
          //newFriends.splice(newFriends.indexOf(action.id), 1)
          //debugger
          console.log('New Friends', newFriends);
          return {...state, friends: newFriends};
    case 'DELETE_ASSOCIATION_WITH_WORKOUTS':
      //NEED TO CUT OUT ALL OF THE ASSOCIATIONS, NOT JUST ONE
          let newAss = state.associations_with_workouts
          console.log('Current Associations', newAss);
          //when i have a friend who has a fof and i delete the fof its not moving him into fof display
          //check that im not already friends with a friend of friend
          let assWithoutFriend = newAss.filter(ass => ass.id !== parseInt(action.friend.user_id))
          let fofIds = action.friend.friends.map(friend => parseInt(friend.user_id))
          let assWithoutFof = assWithoutFriend.filter(ass => !fofIds.includes(ass.id))

          console.log('Associations after delete', assWithoutFof);

          //debugger

        return {...state, associations_with_workouts: assWithoutFof}

    default:
      return state;
  }
}
