import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class WorkoutItem extends React.Component {

  leaveWorkout = (e) => {
    const workout = this.props.workout
    const currentUser = this.props.currentUser
    const userWorkout = currentUser.user_workouts.find(uw => workout.id === uw.workout_id)
    const userWorkoutId = userWorkout.id

    this.props.deleteUserWorkout(userWorkoutId)
    this.props.history.push(`/runbuddy/workouts`)
   }

   render() {
     return (
       <div>
         <div>
           <p>Start Time: {this.props.workout.start_time}</p>
           <p>Date: {this.props.workout.date}</p>
           <p>Address: {this.props.workout.address}</p>
           <p>Distance: {this.props.workout.distance}</p>
           <p>Pace: {this.props.workout.pace}</p>

         </div>
         <div>
           <button onClick={this.leaveWorkout}>Leave Workout</button>
           <p>__________________________________</p>
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

export default withRouter(connect(mapStateToProps, actions)(WorkoutItem));
