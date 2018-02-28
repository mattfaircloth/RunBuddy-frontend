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

  render() {
    let userWorkouts = this.props.currentUser.workouts.map(workout => workout.id)
    let avWorkouts = this.props.currentUser.available_workouts.map(workouts => {
      return workouts.filter(workout => !userWorkouts.includes(workout.id))
    })


    console.log('My Workouts', userWorkouts)
    console.log('Workouts on Map:', avWorkouts)
    return (
      <div>
        <h3>Workouts to Join:</h3>
      <div className="google-map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.GOOGLE_MAPS}`}}
          center={this.props.center}
          zoom={this.props.zoom} >
          <CurrentLocation lat={this.props.currentPosition.latitude} lng={this.props.currentPosition.longitude} />

          {avWorkouts.map(markers => {
            return markers.map(marker => {
              return <Marker  className="existingMarker" key={marker.id}
                                  lat={marker.latitude}
                                  lng={marker.longitude}
                                  handleMarkerClick={this.props.handleMarkerClick}
                                  marker={marker} />
            })

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
