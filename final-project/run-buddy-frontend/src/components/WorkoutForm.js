import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';



class WorkoutForm extends React.Component {

   constructor(props) {
     super(props);

     this.state = {
       start_time: '',
       activity: 'Run',
       address: '',
       latitude: null,
       longitude: null,
       distance: '',
       pace: '',
       phone: '',
       email: props.currentUser.email
     }
   }

   handleSubmit = e => {
      const data = this.state
      const address = `${this.state.address}`

      //HAVE TO UPDATE PARAMS FOR ADDRESS
      this.props.getWorkoutGeoLocation(address).then(resp => {
        const lat = resp.results[0].geometry.location.lat;
        const lng = resp.results[0].geometry.location.lng;
        const coords = {lat: lat, lng: lng};
        return coords
      }).then(coords => {
        data.latitude = coords.lat
        data.longitude = coords.lng
        return data
      }).then(data => {
        this.props.postWorkout(data);
        this.props.history.push("/runbuddy/workouts")
      })
  }

   handleChange = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

  render() {
    return (
      <form className="ui form">
        <div className="ui grid container">
          <div className="ui two column stackable grid">
            <h2 className='workout-form-title'></h2>
                <div className="column">
                  <div className='new-workout'>
                    <h4 className="ui dividing header">New Workout</h4>

                    <div className="field">
                      <label>Start Time</label>
                        <input onChange={this.handleChange} type="text" name="start_time" placeholder="Start Time"/>
                    </div>

                    <div className="field">
                      <label>Date</label>
                        <input onChange={this.handleChange} type="text" name="date" placeholder="Date"/>
                    </div>


                    <div className="field">
                      <label>Address</label>
                      <input onChange={this.handleChange} type="text" name="address" placeholder="Address"/>
                    </div>


                    <div className="field">
                      <label>Distance</label>
                      <input onChange={this.handleChange} type="number" name="distance" placeholder="Distance in Miles"/>
                    </div>

                    <div className="field">
                      <label>Pace</label>
                      <input onChange={this.handleChange} type="text" name="pace" placeholder="Pace"/>
                    </div>

                    <div className="ui button" onClick={this.handleSubmit} tabIndex="0">Create Workout</div>
                  </div>
                </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(WorkoutForm);
