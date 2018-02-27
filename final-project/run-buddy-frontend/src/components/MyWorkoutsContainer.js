import React from 'react'
import WorkoutItem from './WorkoutItem'
import FriendWorkout from './FriendWorkout'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class MyWorkoutsContainer extends React.Component {

  render() {
    let workouts = this.props.currentUser.workouts.map(workout => <WorkoutItem key={workout.id} workout={workout}/>)
    return(
      <div>
        <div>
          <h3>Your Workouts:</h3>
          {workouts}
        </div>
    </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentPosition: state.currentPosition,
    currentUser: state.currentUser
  }
}


export default withRouter(connect(mapStateToProps, actions)(MyWorkoutsContainer));
