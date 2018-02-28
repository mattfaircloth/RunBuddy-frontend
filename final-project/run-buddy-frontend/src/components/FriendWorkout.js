import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class FriendWorkout extends React.Component {

  joinWorkout = (e) => {
      const workoutId = this.props.workout[0].id
      const currentUserId = this.props.currentUser.id
      const data = {workout_id: workoutId, user_id: currentUserId}
      console.log(workoutId);
      console.log(currentUserId)
      console.log('_____')
      console.log(data)

      this.props.postUserWorkout(data)
      this.props.history.push(`/runbuddy/myworkouts`)

   }

   // <div className="header">{user.name}</div>
   // <div className="meta">{user.email}</div>
   // <div className="meta">{user.phone}</div>

  render() {
    console.log(this.props);
    const workout = this.props.workout
    // const user = this.props.currentUser.associations_with_workouts.find(user => user.id === workout[0].user_id);
    // debugger

    return (
    <div className="parent">
      <h4 className="ui header">
        Workout Details:
      </h4>
      <div className="ui card">
        <div className="image">

        </div>
        <div className="content">
          <h5>Runner: </h5>

          <h5 className="ui header">
            Meetup Point:
          </h5>
            <div className="sub header">{workout[0].address}</div>
            <div className="sub header">
              <h5>Workout Info</h5>
              <p>Date: {workout[0].date}</p>
              <p>Start Time: {workout[0].start_time}</p>
              <p>Distance: {workout[0].distance} miles</p>
              <p>Pace: {workout[0].pace} per minute</p>
            </div>
        </div>
      </div>

      <div className="back-button">
        <div>
          <button onClick={this.joinWorkout}>Join Workout</button>
        </div>
        <div>
        <Link to="/runbuddy/workouts">
          <button>Back</button>
        </Link>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(FriendWorkout));
