import React from 'react'
import MyWorkoutItem from './MyWorkoutItem'
import JoinedWorkoutItem from './JoinedWorkoutItem'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {Button} from 'react-materialize'

class MyWorkoutsContainer extends React.Component {

  state = {
    allWorkouts: []
  }

  componentDidMount = () => {
    this.props.getAllWorkouts()
    .then(res => this.setState({ allWorkouts: res }))
  }

  render() {
    let myCreatedWorkouts = this.state.allWorkouts.filter(workout => this.props.currentUser.id === workout.owner_id)
    let myWorkouts = myCreatedWorkouts.map(workout => <MyWorkoutItem key={workout.id} currentUser={this.props.currentUser} workout={workout}/>)


      let joinedWorkouts
    if (this.props.currentUser.workouts) {
      joinedWorkouts = this.props.currentUser.workouts.map(workout => <JoinedWorkoutItem key={workout.address} currentUser={this.props.currentUser} workout={workout}/>)
    } else {
      null
    }

    return(
      <div>
        <div>
          <h3>My Workouts:</h3>
          {myWorkouts}
        </div>
        <div>
          <h3>Joined Workouts:</h3>
          {joinedWorkouts}
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
