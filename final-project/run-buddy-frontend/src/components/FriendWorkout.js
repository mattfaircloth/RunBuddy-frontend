import React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {Button, Icon, Col, Card, Row} from 'react-materialize'

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

		            <Card className='friend-workout' textClassName='white-text' >
                  <Row>
                  <Col s={4}>
                    <h5>Runner: </h5>
                      <div className="header">{user.name}</div>
                      <div className="meta">{user.email}</div>
                      <div className="meta">{user.phone}</div>
                  </Col>
                  <Col s={4}>
                    <h5 className="ui header">
                      Meetup Point:
                    </h5>
                    <div>Date: {workout.date}</div>
                    <div>Start Time: {workout.start_time}</div>
                    <div>{workout.address}</div>
                  </Col>
                  <Col s={4}>
                    <h5>Workout Info:</h5>

                    <p>Distance: {workout.distance} miles</p>
                    <p>Pace: {workout.pace} per minute</p>
                  </Col>


                    </Row>
                    <Row>
                      <div>
                        <Button className='black-button' waves='light' onClick={this.joinWorkout}>Join Workout<Icon left>check</Icon></Button>
                          <Link to="/runbuddy/workouts">
                            <Button className='black-button' waves='light'>Back</Button>
                          </Link>
                      </div>
                    </Row>
		            </Card>


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
