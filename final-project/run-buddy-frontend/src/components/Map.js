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
    return (
      <div>
        <h3>Workouts to Join:</h3>
      <div className="google-map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.GOOGLE_MAPS}`}}
          center={this.props.center}
          zoom={this.props.zoom} >
          <CurrentLocation lat={this.props.currentPosition.latitude} lng={this.props.currentPosition.longitude} />

          {this.props.currentUser.available_workouts.map((marker, i) => {
              return <Marker  className="existingMarker" key={i}
                                  lat={marker[0].latitude}
                                  lng={marker[0].longitude}
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
