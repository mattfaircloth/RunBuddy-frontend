import React from 'react'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Card, CardTitle, Button, Icon } from 'react-materialize'

class MyWorkoutItem extends React.Component {

  // cancelWorkout = (e) => {
  //   const workout = this.props.workout
  //   // const currentUser = this.props.currentUser
  //   // const userWorkout = currentUser.user_workouts.find(uw => workout.id === uw.workout_id)
  //   // const userWorkoutId = userWorkout.id
  //   //console.log('user workout id', userWorkoutId)
  //
  //   this.props.deleteWorkout(workout.id)
  //   this.props.history.push(`/runbuddy/workouts`)
  //  }

   //actions={<Button className='profile-button' waves='light' onClick={this.cancelWorkout}>Cancel Workout<Icon left>close</Icon></Button>}

   render() {
     return (
       <div className='workout-display-item'>
         <Card className='large'
           header={<CardTitle image='../Love.png'><p></p>

           </CardTitle>}

           >
             <p>Start Time: {this.props.workout.start_time}</p>
             <p>Date: {this.props.workout.date}</p>
             <p>Address: {this.props.workout.address}</p>
             <p>Distance: {this.props.workout.distance}</p>
             <p>Pace: {this.props.workout.pace}</p>
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

export default withRouter(connect(mapStateToProps, actions)(MyWorkoutItem));
