import React from 'react'
import Map from './Map'
import WorkoutItem from './WorkoutItem'
import FriendWorkout from './FriendWorkout'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class WorkoutsContainer extends React.Component {

  componentDidMount() {
    if (this.props.currentPosition.latitude) {

      this.setState({ center: this.props.currentPosition })
    } else {
      this.props.getLocation();
    }
  }

  handleMarkerClick = e => {
     const workoutAddresses = this.props.currentUser.available_workouts.map(workouts => workouts.find(workout => workout.address === e.currentTarget.attributes.name.textContent))
     const workout = workoutAddresses.filter(add => add !== undefined)

    const workoutSlug = workout[0].address.split(" ").join("-")
    this.props.history.push(`/runbuddy/workouts/${workoutSlug}`);
  }


  render() {
    return(
      <div>
        <Switch>
          <Route path="/runbuddy/workouts/:slug" render={(args) =>  {
            const workoutAddresses = this.props.currentUser.available_workouts.map(workouts => workouts.find(workout => workout.address.split(" ").join("-") === args.match.params.slug))
            const workout = workoutAddresses.filter(add => add !== undefined)
                return <FriendWorkout workout={workout} currentUser={this.props.currentUser} />
                }} />
        </Switch>
        <Map  handleMarkerClick={this.handleMarkerClick}/>
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

export default withRouter(connect(mapStateToProps, actions)(WorkoutsContainer));
