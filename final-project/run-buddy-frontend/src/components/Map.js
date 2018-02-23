import React from "react";
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CurrentLocation from './CurrentLocation'
import config from '../config'

class Map extends React.Component {
  static defaultProps = {
    center: {lat: 40.731134, lng: -73.984099},
    zoom: 11
  };



  render() {
    console.log(this.props);
    return (
      <div className="google-map">
      test
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.GOOGLE_MAPS}`}}
          center={this.props.center}
          zoom={this.props.zoom} >
          <CurrentLocation lat={this.props.currentPosition.latitude} lng={this.props.currentPosition.longitude} />
        </GoogleMapReact>
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
