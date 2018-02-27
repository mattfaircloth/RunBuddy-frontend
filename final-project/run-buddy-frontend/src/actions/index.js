

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
