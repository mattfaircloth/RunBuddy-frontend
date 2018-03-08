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
    //console.log('User', user);

    return (
    <div className="parent">

		            <Card className='friend-workout' textClassName='white-text' >
                  <Row>
                  <Col s={4}>
                    <h4>Runner: </h4>
                      <h5 className="header">{user.name}</h5>
                      <h5 className="meta">{user.email}</h5>
                      <h5 className="meta">{user.phone}</h5>
                  </Col>
                  <Col s={4}>
                    <h4 className="ui header">
                      Meetup Point:
                    </h4>
                    <h5>Date: {workout.date}</h5>
                    <h5>Start Time: {workout.start_time}</h5>
                    <h5>{workout.address}</h5>
                  </Col>
                  <Col s={4}>
                    <h4>Workout Info:</h4>

                    <h5>Distance: {workout.distance} miles</h5>
                    <h5>Pace: {workout.pace}</h5>
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
