import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import {Button, Icon} from 'react-materialize'

class WorkoutItem extends React.Component {

  leaveWorkout = (e) => {
    const workout = this.props.workout
    const currentUser = this.props.currentUser
    const userWorkout = currentUser.user_workouts.find(uw => workout.id === uw.workout_id)
    const userWorkoutId = userWorkout.id
    console.log('user workout id', userWorkoutId)

    this.props.deleteUserWorkout(userWorkoutId, workout.id)
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
           <Button waves='light' onClick={this.leaveWorkout}>Leave Workout<Icon left>close</Icon></Button>

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
