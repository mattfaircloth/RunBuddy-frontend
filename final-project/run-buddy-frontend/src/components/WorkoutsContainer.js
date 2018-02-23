import React from 'react'
import Map from './Map'
import WorkoutItem from './WorkoutItem'
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
    if (this.props.currentPosition.latitude) {

      this.setState({ center: this.props.currentPosition })
    } else {
      this.props.getLocation();
    }
  }



  render() {

    console.log(this.props);

    let workouts = this.props.currentUser.workouts.map(workout => <WorkoutItem key={workout.id} workout={workout}/>)
    return(
      <div>
        <div>
          <h3>Workouts:</h3>
          {workouts}
        </div>
        Hi
        <Map />
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
