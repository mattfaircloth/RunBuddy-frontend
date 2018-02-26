import React from 'react';
import { Link } from 'react-router-dom';

class FriendWorkout extends React.Component {

  render() {
    const workout = this.props.workout
    const user = this.props.currentUser.associations_with_workouts.find(user => user.id === workout[0].user_id);

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
          <div className="header">{user.name}</div>
          <div className="meta">{user.email}</div>
          <div className="meta">{user.phone}</div>
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
        <Link to="/runbuddy/workouts">
          <button>Back</button>
        </Link>
      </div>
    </div>
    )
  }
}



export default FriendWorkout;
