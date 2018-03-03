import React from "react";
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CurrentLocation from './CurrentLocation'
import Marker from './Marker'
import config from '../config'

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 40.731134, lng: -73.984099},
    zoom: 12
  };

  //DISPLAY ALL WORKOUTS THAT THAT DONT HAVE AN OWNER ID OF THE CURRENT USER ID
  render() {

    let displayAssociations = this.props.currentUser.associations_with_workouts.map(ass => parseInt(ass.user_id) || ass.id)
    let workoutChoices = this.props.allWorkouts.filter(workout => workout.owner_id !== this.props.currentUser.id)
    let avWorkouts = workoutChoices.filter(workout =>  displayAssociations.includes(workout.owner_id))
    let joinedWorkouts = this.props.currentUser.workouts;

    let avIds = avWorkouts.map(workout => workout.id)
    let joinedIds = joinedWorkouts.map(workout => workout.id)

    console.log('Associations with Workouts:', displayAssociations)
    //console.log(workoutChoices)

    //console.log('Available Workouts Ids', avIds)
    //console.log('Joined Workouts Ids', joinedIds)

    let differentIds = avIds.filter( (id) => {
      return !joinedIds.includes(id)
    })

    let mapWorkouts = avWorkouts.filter((workout) => {
      return differentIds.includes(workout.id)
    })


    return (
      <div>
        <h3 className='map-title'>Workouts to Join:</h3>
      <div className="google-map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.GOOGLE_MAPS}`}}
          center={this.props.center}
          zoom={this.props.zoom} >
          <CurrentLocation lat={this.props.currentPosition.latitude} lng={this.props.currentPosition.longitude} />

          {mapWorkouts.map(marker => {
              return <Marker  className="existingMarker" key={marker.id}
                                  lat={marker.latitude}
                                  lng={marker.longitude}
                                  handleMarkerClick={this.props.handleMarkerClick}
                                  marker={marker} />


            })}
        </GoogleMapReact>
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

export default connect(mapStateToProps, actions)(Map);
