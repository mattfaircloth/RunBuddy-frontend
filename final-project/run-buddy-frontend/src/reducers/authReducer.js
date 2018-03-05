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

          //when i have a friend who has a fof and i delete the fof its not moving him into fof display
          //check that im not already friends with a friend of friend

          //if the friend that i'm deleting has a friend that is the same as mine, dont delete them from the array
          //remove the selectedfriend, but keep the friend that is my friend

          // let mutualFriendIds = state.friends.map(friend => friend.id)

          // console.log('My Friends', mutualFriendIds);
          // console.log('friend of friend Ids:', fofIds);


          // let differentIds = mutualFriendIds.filter( (id) => {
          //   return fofIds.includes(id)
          // })
          // console.log('Different Ids', differentIds);
          // //debugger

          //let assWithoutFriend = newAss.filter(ass => differentIds.includes(ass.id))

          // if (differentIds.length > 0) {
          //   assWithoutFriend = newAss.filter(ass => !differentIds.includes(ass.id))
          // } else {
          //   assWithoutFriend = newAss.filter(ass => ass.id !== parseInt(action.friend.user_id))
          // }

          let newAss = state.associations_with_workouts
          console.log('Current Associations', newAss);
          
          let assWithoutFriend = newAss.filter(ass => ass.id !== parseInt(action.friend.user_id))

          let fofIds = action.friend.friends.map(friend => parseInt(friend.user_id))

          console.log('Associations without the friend being removed:', assWithoutFriend);

          let myFriendButFoF = state.friends.filter(friend => fofIds.includes(friend.id))
          console.log('Boom', myFriendButFoF[0]);

          let assWithoutFof;

          if (myFriendButFoF[0] === undefined) {
            assWithoutFof = assWithoutFriend.filter(ass => !fofIds.includes(ass.id))
          } else if (fofIds.includes(myFriendButFoF[0].id)) {
            assWithoutFof = assWithoutFriend
          }

          console.log('Associations after delete', assWithoutFof);

          //debugger

        return {...state, associations_with_workouts: assWithoutFof}

    default:
      return state;
  }
}
