import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Button, Icon, Col, Card} from 'react-materialize'

class FriendWorkout extends React.Component {

  joinWorkout = (e) => {
      const workoutId = this.props.workout.id
      const currentUserId = this.props.currentUser.id
      const data = {workout_id: workoutId, user_id: currentUserId}
      console.log(workoutId);
      console.log(currentUserId)
      console.log('_____')
      console.log(data)

      this.props.postUserWorkout(data, this.props.workout)
      this.props.history.push(`/runbuddy/myworkouts`)

   }



  render() {
    const workout = this.props.workout
    const ownerId = this.props.workout.owner_id
    const user = this.props.currentUser.associations_with_workouts.find(user => {
     if (user.user_id) {
       return parseInt(user.user_id) === ownerId
      } else {
       return  user.id === ownerId
      }
    })
    //debugger
    console.log(this.props.currentUser.user_workouts);

    return (
    <div className="parent">
            <Col m={6} s={12}>
		            <Card className='blue-grey darken-1' textClassName='white-text' >
                  <div>
                    <h4 className="ui header">
                      Workout Details:
                    </h4>
                  </div>
                  <div className="content">
                    <h5>Runner: </h5>
                      <div className="header">{user.name}</div>
                      <div className="meta">{user.email}</div>
                      <div className="meta">{user.phone}</div>
                    <h5 className="ui header">
                      Meetup Point:
                    </h5>
                      <div className="sub header">{workout.address}</div>
                      <div className="sub header">
                        <h5>Workout Info</h5>
                        <p>Date: {workout.date}</p>
                        <p>Start Time: {workout.start_time}</p>
                        <p>Distance: {workout.distance} miles</p>
                        <p>Pace: {workout.pace} per minute</p>
                      </div>
                    </div>
		            </Card>
            </Col>

      <div className="back-button">
        <div>
          <Button waves='light' onClick={this.joinWorkout}>Join Workout<Icon left>check</Icon></Button>
            <Link to="/runbuddy/workouts">
              <Button waves='light'>Back</Button>
            </Link>
        </div>
        <div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, actions)(FriendWorkout));
