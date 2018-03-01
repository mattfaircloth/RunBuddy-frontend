import React from 'react'
import WorkoutItem from './WorkoutItem'
import FriendWorkout from './FriendWorkout'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Switch, Route, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {Button} from 'react-materialize'

class MyWorkoutsContainer extends React.Component {

  render() {
    let workouts = this.props.currentUser.workouts.map(workout => <WorkoutItem key={workout.id} currentUser={this.props.currentUser} workout={workout}/>)
    return(
      <div>
        <div>
          <h3>Your Workouts:</h3>
          {workouts}
        </div>

        <div>
          <Link to="/runbuddy/workouts">
            <Button waves='light'>Back</Button>
          </Link>
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
