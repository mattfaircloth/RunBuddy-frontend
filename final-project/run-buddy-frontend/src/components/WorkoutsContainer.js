import React from 'react'
import Map from './Map'
import WorkoutItem from './WorkoutItem'
import FriendWorkout from './FriendWorkout'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class WorkoutsContainer extends React.Component {

  state = {
    center: {latitude: 40.731134, longitude: -73.984099},
    zoom: 11
  }

  componentDidMount() {
    console.log(this.props.currentUser.available_workouts);
    if (this.props.currentPosition.latitude) {

      this.setState({ center: this.props.currentPosition })
    } else {
      this.props.getLocation();
    }
  }

  handleMarkerClick = e => {
    const workout = this.props.currentUser.available_workouts.find(workout => workout[0].address === e.currentTarget.attributes.name.textContent)
    const workoutSlug = workout[0].address.split(" ").join("-")
    this.props.history.push(`/runbuddy/workouts/${workoutSlug}`);
    this.setState({
      center: {latitude: parseFloat(workout.latitude), longitude: parseFloat(workout.longitude)},
      zoom: 13
    })
  }

  render() {

    return(
      <div>
        <Switch>
          <Route path="/runbuddy/workouts/:slug" render={(args) =>  {
                const workout = this.props.currentUser.available_workouts.find(workout => workout[0].address.split(" ").join("-") === args.match.params.slug)
                return <FriendWorkout workout={workout} currentUser={this.props.currentUser}/>
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
