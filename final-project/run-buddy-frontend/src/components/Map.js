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

    // let otherRunners = this.props.runners.filter(runner => parseInt(runner.id) !== this.props.currentUser.id)
    // let allRunners;
    // if (this.props.searchTerm !== '') {
    // let filteredRunners = otherRunners.filter(runner => runner.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    //   allRunners = filteredRunners.map(runner => <RunnerItem key={runner.id}  runner={runner} addFriend={this.addFriend} removeFriend={this.removeFriend}/>)
    // } else {
    //   allRunners = otherRunners.map(runner => <RunnerItem key={runner.id} runner={runner} addFriend={this.addFriend}removeFriend={this.removeFriend}/>)
    // }

    let displayAssociations = this.props.currentUser.associations_with_workouts.map(ass => ass.id)
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

    console.log('Map Workouts', mapWorkouts);

    let paceMapWorkouts
    let filteredMapWorkouts

    if (this.props.paceSearchTerm !== '') {
     paceMapWorkouts = mapWorkouts.filter(workout => workout.pace.includes(this.props.paceSearchTerm))
   } else {
     paceMapWorkouts = mapWorkouts
   }

   let y = paceMapWorkouts.map(workout => workout.owner_id)
   let associationsForSearch = this.props.currentUser.associations_with_workouts.map(ass => ass)
   let x = associationsForSearch.filter(ass => y.includes(ass.id))

   if (this.props.runnerSearchTerm !== '') {
     let q = x.filter(ass => ass.name.toLowerCase().includes(this.props.runnerSearchTerm.toLowerCase()))
     let qIds = q.map(runner => runner.id)
     filteredMapWorkouts = paceMapWorkouts.filter(workout => qIds.includes(workout.owner_id))
     console.log('Filtered', filteredMapWorkouts);
   } else {
     filteredMapWorkouts = paceMapWorkouts
   }


    return (
      <div>
        <h3 className='map-title'>Workouts to Join:</h3>
      <div className="google-map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: `${config.GOOGLE_MAPS}`}}
          center={this.props.center}
          zoom={this.props.zoom} >
          <CurrentLocation lat={this.props.currentPosition.latitude} lng={this.props.currentPosition.longitude} />

          {filteredMapWorkouts.map(marker => {
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
