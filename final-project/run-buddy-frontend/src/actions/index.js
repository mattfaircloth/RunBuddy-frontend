

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

export function fetchUser() {
  return (dispatch) => {
    const token = localStorage.getItem("token")
    return fetch('http://localhost:3001/api/v1/current_user', {
      headers: {'Authorization': token}
    }).then(resp => resp.json())
    .then(user => {
      dispatch({ type: 'LOGIN_USER', payload: user })
    })
  }
}

export function getAllUsers() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/users')
    .then(resp => resp.json())
  }
}

export function getAllWorkouts() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/workouts')
    .then(resp => resp.json())
  }
}

export function loginUser(response, history) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/home', {
      method: 'POST',
      headers,
      body: JSON.stringify({response})
    }).then(resp => resp.json())
    .then(user => {
      localStorage.setItem("token", user.code)
      dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
      history.push("/home")
    })
  }
}

export function signUp(username, password, name, email, phone, history) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify({username, password, name, email, phone})
    }).then(resp => resp.json())
    .then(user => {
      localStorage.setItem("token", user.token)
      history.push("/home")
    })
  }
}

export function loginManualUser(username, password, history) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers,
      body: JSON.stringify({username, password})
    }).then(resp => resp.json())
    .then(user => {
      localStorage.setItem("token", user.token)
      history.push("/home")
    })
  }
}

export function logoutUser() {
  return (dispatch) => {
    localStorage.clear();
  }
}

export function getLocation() {
  return (dispatch) => {
    navigator.geolocation.getCurrentPosition(position => {
      dispatch({
       type: 'SET_CURRENT_POSITION',
       currentPosition: {latitude: position.coords.latitude, longitude: position.coords.longitude}
     })
    })
  }
}

export function getWorkoutGeoLocation(address) {
  return (dispatch) => {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDfdcHEre9XiJdspQ2au6OmG-UBRkkV7co`)
    .then(resp => resp.json())
  }
}

export function postWorkout(data) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/workouts', {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    }).then(resp => resp.json())
    .then(json => {
      const {start_time, date, activity, address, distance, pace, id} = json
      const workout = {start_time, date, activity, address, distance, pace, id}
      dispatch({ type: 'UPDATE_USER_WORKOUTS', workout })
    })
  }
}

export function postUserWorkout(data, workout) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/userworkouts', {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    }).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_USER_USERWORKOUTS', user_workout: json })
      dispatch({type: 'UPDATE_SPECIFIC_WORKOUT', workout: workout})
    })
  }
}


export function deleteUserWorkout(id, workoutId) {
  return (dispatch) => {

    console.log(id);
    return fetch(`http://localhost:3001/api/v1/userworkouts/${id}`, {
      method: 'DELETE',
      headers
    }).then(
      dispatch({ type: 'DELETE_USER_WORKOUTS', id: workoutId}),
      dispatch({ type: 'DELETE_USER_USERWORKOUTS', id: id})
    )

  }
}

export function postUserFriend(data, friend) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/userfriends', {
      method: 'POST',
      headers,
      body: JSON.stringify({data})
    }).then(resp => resp.json())
    .then(json => {
      dispatch({ type: 'UPDATE_USER_FRIENDS', user_friend: json })
      dispatch({type: 'UPDATE_SPECIFIC_FRIEND', friend: friend})
      dispatch({ type: 'UPDATE_ASSOCIATION_WITH_WORKOUTS', friend: friend})
    })
  }
}

export function deleteUserFriend(id, friendId, friend) {
  return (dispatch) => {

    console.log(id);
    return fetch(`http://localhost:3001/api/v1/userfriends/${id}`, {
      method: 'DELETE',
      headers
    }).then(
      dispatch({ type: 'DELETE_USER_FRIENDS', id: friendId}),
      dispatch({ type: 'DELETE_ASSOCIATION_WITH_WORKOUTS', friend: friend})
    )

  }
}
